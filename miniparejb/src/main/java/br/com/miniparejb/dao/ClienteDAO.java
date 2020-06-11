package br.com.miniparejb.dao;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.miniparejb.entity.Cliente;

@Stateless
public class ClienteDAO {

	@PersistenceContext
	private EntityManager manager;

	@EJB
	private ContaDAO contaDao;

	public void gravar(Cliente cliente, Long id) {
		cliente.setConta(contaDao.find(id));
		manager.persist(cliente);
	}

	public void atualizar(Cliente cliente) {
		manager.merge(cliente);
	}
	
	public Cliente buscaCliente(String cpf) {
		return manager.createQuery("select c from Cliente c "
				+ "join fetch c.conta "
				+ "where c.bolAtivo = 1 "
				+ "and c.cpf = :cpf", Cliente.class)
				.setParameter("cpf", cpf)
				.getSingleResult();
	}

	public List<Cliente> listar(){
		return manager.createQuery("select c from Cliente c "
				+ "join fetch c.conta "
				+ "where c.bolAtivo = 1", Cliente.class)
				.getResultList();
	}

	public Cliente find(Long id) {
		return manager.find(Cliente.class, id);
	}

	public List<Cliente> consultar(String nome, String cpf) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Cliente> query = criteriaBuilder.createQuery(Cliente.class);
		Root<Cliente> root = query.from(Cliente.class);

		Path<String> nomePath = root.<String> get("nome");
		Path<String> cpfPath = root.<String> get("cpf");
		Path<Integer> bolativoPath = root.<Integer> get("bolAtivo");

		List<Predicate> predicates = new ArrayList<Predicate>();

		if (!cpf.isEmpty()) {
			Predicate cpfIgual = criteriaBuilder.like(cpfPath, "%" + cpf + "%");
			predicates.add(cpfIgual);
		}

		if (!nome.isEmpty()) {
			Predicate nomeIgual = criteriaBuilder.like(nomePath, "%" + nome + "%");
			predicates.add(nomeIgual);
		}

		Predicate bolativoIgual = criteriaBuilder.equal(bolativoPath, 1);
		predicates.add(bolativoIgual);

		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Cliente> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();	
	}
}
