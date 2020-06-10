package br.com.miniparejb.dao;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.miniparejb.entity.Pagador;

@Stateless
public class PagadorDAO {

	@PersistenceContext
	private EntityManager manager;
	
	public void gravar(Pagador pagador) {
		if(pagador.getId() == null) {
			System.out.println("estou no if:"+ pagador.getId());
			manager.persist(pagador);
		}else {
			System.out.println("Estou no else");
			manager.merge(pagador);
		}	
	}
		
	public List<Pagador> consultaPagadorExistente(String cpf, String nome, String email) {
		return manager
		.createQuery("select p from Pagador p "
				+ "where p.cpf =: cpf "
				+ "or p.nome =: nome "
				+ "or p.email =: email", Pagador.class)
		.setParameter("cpf", cpf)
		.setParameter("nome", nome)
		.setParameter("email", email)
		.getResultList();
	}
		
	public List<Pagador> listaPagador(){
		return manager.createQuery("select p from Pagador p", Pagador.class)
		.getResultList();	
	}
	
	public Pagador find(Long id) {
		return manager.find(Pagador.class, id);
	}
		
	public void deleta(Long id) {
		manager.remove(manager.getReference(Pagador.class, id));
	}

	public List<Pagador> consultaPagador(String nome, String cpf) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Pagador> query = criteriaBuilder.createQuery(Pagador.class);
		Root<Pagador> root = query.from(Pagador.class);
		
		Path<String> nomePath = root.<String> get("nome");
		Path<String> cpfPath = root.<String> get("cpf");
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		
		if (!cpf.isEmpty()) {
			Predicate cpfIgual = criteriaBuilder.like(cpfPath, "%" + cpf + "%");
			predicates.add(cpfIgual);
		}
		
		if (!nome.isEmpty()) {
			Predicate nomeIgual = criteriaBuilder.like(nomePath, "%" + nome + "%");
			predicates.add(nomeIgual);
		}
		
		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Pagador> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();	
	}
}
