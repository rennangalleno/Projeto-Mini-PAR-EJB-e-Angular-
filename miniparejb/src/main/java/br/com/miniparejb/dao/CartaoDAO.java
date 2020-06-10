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

import br.com.miniparejb.entity.Bandeira;
import br.com.miniparejb.entity.Cartao;

@Stateless
public class CartaoDAO {
	
	@PersistenceContext
	private EntityManager manager;
	
	public void gravar(Cartao cartao) {
		if(cartao.getId() == null) {
			manager.persist(cartao);
		} else {
			manager.merge(cartao);
		}
	}
	
	public List<Cartao> listar(){
		return manager.createQuery("select c from Cartao c "
				+ "join fetch c.bandeira "
				+ "join fetch c.cliente "
				+ "join fetch c.tipoRecebivel "
				+ "join fetch c.situacaoRecebivel "
				+ "where c.situacaoRecebivel = 1", Cartao.class).getResultList();	
	}
	
	public List<Bandeira> listaBandeira(){
		return manager.createQuery("select b from Bandeira b", Bandeira.class).getResultList();
	}
	
	public Cartao find(Long id) {
		return manager.find(Cartao.class, id);
	}

	public List<Cartao> consultar(Long clienteId, Integer bandeiraId) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Cartao> query = criteriaBuilder
				.createQuery(Cartao.class);
		Root<Cartao> root = query.from(Cartao.class);

		Path<Long> clienteIdPath = root.join("cliente").<Long> get("id");
		Path<Integer> bandeiraIdPath = root.join("bandeira").<Integer> get("id");
		Path<Integer> situacaoPath = root.join("situacaoRecebivel").<Integer> get("id");

		List<Predicate> predicates = new ArrayList<Predicate>();

		if (clienteId != null) {
			System.out.println("ClienteId: "+clienteId);
			Predicate clienteIdIgual = criteriaBuilder.equal(clienteIdPath, clienteId);
			predicates.add(clienteIdIgual);
		}

		if (bandeiraId != null) {
			System.out.println("BandeiraId: "+bandeiraId);
			Predicate bandeiraIdIgual = criteriaBuilder.equal(bandeiraIdPath, bandeiraId);
			predicates.add(bandeiraIdIgual);
		}
		
		Predicate situacaoIgual = criteriaBuilder.equal(situacaoPath, 1);
		predicates.add(situacaoIgual);

		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Cartao> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();

	}
	
	
	
}
