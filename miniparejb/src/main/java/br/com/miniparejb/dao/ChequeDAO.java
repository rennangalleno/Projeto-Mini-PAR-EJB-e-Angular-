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

import br.com.miniparejb.entity.Cheque;

@Stateless
public class ChequeDAO {
	
	@PersistenceContext
	private EntityManager manager;
	
	public void gravar(Cheque cheque) {
		if(cheque.getId() == null) {
			manager.persist(cheque);
		} else {
			manager.merge(cheque);
		}
	}
	
	public List<Cheque> listar(){
		return manager.createQuery("select c from Cheque c "
				+ "join fetch c.pagador "
				+ "join fetch c.cliente "
				+ "join fetch c.tipoRecebivel "
				+ "join fetch c.situacaoRecebivel "
				+ "where c.situacaoRecebivel = 1", Cheque.class).getResultList();	
	}
		
	public Cheque find(Long id) {
		return manager.find(Cheque.class, id);
	}

	public List<Cheque> consultar(Long clienteId, Long pagadorId) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Cheque> query = criteriaBuilder
				.createQuery(Cheque.class);
		Root<Cheque> root = query.from(Cheque.class);

		Path<Long> clienteIdPath = root.join("cliente").<Long> get("id");
		Path<Long> pagadorIdPath = root.join("pagador").<Long> get("id");
		Path<Integer> situacaoPath = root.join("situacaoRecebivel").<Integer> get("id");

		List<Predicate> predicates = new ArrayList<Predicate>();

		if (clienteId != null) {
			Predicate clienteIdIgual = criteriaBuilder.equal(clienteIdPath, clienteId);
			predicates.add(clienteIdIgual);
		}

		if (pagadorId != null) {
			Predicate pagadorIdIgual = criteriaBuilder.equal(pagadorIdPath, pagadorId);
			predicates.add(pagadorIdIgual);
		}
		
		Predicate situacaoIgual = criteriaBuilder.equal(situacaoPath, 1);
		predicates.add(situacaoIgual);

		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Cheque> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();
	}
}
