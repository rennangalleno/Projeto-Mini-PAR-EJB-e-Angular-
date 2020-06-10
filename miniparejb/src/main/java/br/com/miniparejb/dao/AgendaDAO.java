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

import br.com.miniparejb.entity.Boleto;
import br.com.miniparejb.entity.Cartao;
import br.com.miniparejb.entity.Cheque;

@Stateless
public class AgendaDAO {

	@PersistenceContext
	private EntityManager manager;
	
	public List<Cheque> listaCheque(Long clienteId) {
		return manager.createQuery("select c from Cheque c "
				+ "join fetch c.pagador "
				+ "join fetch c.cliente "
				+ "join fetch c.tipoRecebivel "
				+ "join fetch c.situacaoRecebivel "
				+ "where c.situacaoRecebivel = 1 "
				+ "and c.cliente.id = :clienteId", Cheque.class)
				.setParameter("clienteId", clienteId)
				.getResultList();	
	}
	
	public List<Boleto> listaBoleto(Long clienteId) {
		return manager.createQuery("select b from Boleto b "
				+ "join fetch b.pagador "
				+ "join fetch b.cliente "
				+ "join fetch b.tipoRecebivel "
				+ "join fetch b.situacaoRecebivel "
				+ "where b.situacaoRecebivel = 1 "
				+ "and b.cliente.id = :clienteId", Boleto.class)
				.setParameter("clienteId", clienteId)
				.getResultList();	
	}
	
	public List<Cartao> listaCartao(Long clienteId) {
		return manager.createQuery("select c from Cartao c "
				+ "join fetch c.bandeira "
				+ "join fetch c.cliente "
				+ "join fetch c.tipoRecebivel "
				+ "join fetch c.situacaoRecebivel "
				+ "where c.situacaoRecebivel = 1 "
				+ "and c.cliente.id = :clienteId", Cartao.class)
				.setParameter("clienteId", clienteId)
				.getResultList();	
	}
	
	public List<Cheque> consultaCheque(Long clienteId, Long pagadorId, Integer tipoId /*, Date dataInicial, Date dataFinal*/) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Cheque> query = criteriaBuilder
				.createQuery(Cheque.class);
		Root<Cheque> root = query.from(Cheque.class);

		Path<Long> clienteIdPath = root.join("cliente").<Long> get("id");
		Path<Long> pagadorIdPath = root.join("pagador").<Long> get("id");
		Path<Integer> tipoIdPath = root.join("tipoRecebivel").<Integer> get("id");
		Path<Integer> situacaoPath = root.join("situacaoRecebivel").<Integer> get("id");
		//Path<Date> dataVencimentoPath = root.<Date> get("dataVencimento");
		
		List<Predicate> predicates = new ArrayList<Predicate>();

		if (clienteId != null) {
			Predicate clienteIdIgual = criteriaBuilder.equal(clienteIdPath, clienteId);
			predicates.add(clienteIdIgual);
		}

		if (pagadorId != null) {
			Predicate pagadorIdIgual = criteriaBuilder.equal(pagadorIdPath, pagadorId);
			predicates.add(pagadorIdIgual);
		}
		
		if (tipoId != null) {
			Predicate tipoIdIgual = criteriaBuilder.equal(tipoIdPath, tipoId);
			predicates.add(tipoIdIgual);
		}
		
		Predicate situacaoIgual = criteriaBuilder.equal(situacaoPath, 1);
		predicates.add(situacaoIgual);
		
//		if (tipoId != null) {
//			Predicate dataVencimentoIgual = criteriaBuilder.between(dataVencimentoPath, dataInicial, dataFinal);
//			predicates.add(dataVencimentoIgual);
//		}
	
		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Cheque> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();
	}
	
	public List<Boleto> consultaBoleto(Long clienteId, Long pagadorId, Integer tipoId /*, Date dataInicial, Date dataFinal*/) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Boleto> query = criteriaBuilder
				.createQuery(Boleto.class);
		Root<Boleto> root = query.from(Boleto.class);

		Path<Long> clienteIdPath = root.join("cliente").<Long> get("id");
		Path<Long> pagadorIdPath = root.join("pagador").<Long> get("id");
		Path<Integer> tipoIdPath = root.join("tipoRecebivel").<Integer> get("id");
		Path<Integer> situacaoPath = root.join("situacaoRecebivel").<Integer> get("id");
		//Path<Date> dataVencimentoPath = root.<Date> get("dataVencimento");

		List<Predicate> predicates = new ArrayList<Predicate>();

		if (clienteId != null) {
			Predicate clienteIdIgual = criteriaBuilder.equal(clienteIdPath, clienteId);
			predicates.add(clienteIdIgual);
		}

		if (pagadorId != null) {
			Predicate pagadorIdIgual = criteriaBuilder.equal(pagadorIdPath,
					pagadorId);
			predicates.add(pagadorIdIgual);
		}
		
		if (tipoId != null) {
			Predicate tipoIdIgual = criteriaBuilder.equal(tipoIdPath,
					tipoId);
			predicates.add(tipoIdIgual);
		}
		
		Predicate situacaoIgual = criteriaBuilder.equal(situacaoPath, 1);
		predicates.add(situacaoIgual);
		
//		if (tipoId != null) {
//			Predicate dataVencimentoIgual = criteriaBuilder.between(dataVencimentoPath, dataInicial, dataFinal);
//			predicates.add(dataVencimentoIgual);
//		}

		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Boleto> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();

	}
	
	public List<Cartao> consultaCartao(Long clienteId, Integer bandeiraId, Integer tipoId/*, Date dataInicial, Date dataFinal*/) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Cartao> query = criteriaBuilder
				.createQuery(Cartao.class);
		Root<Cartao> root = query.from(Cartao.class);

		Path<Long> clienteIdPath = root.join("cliente").<Long> get("id");
		Path<Integer> bandeiraIdPath = root.join("bandeira").<Integer> get("id");
		Path<Integer> tipoIdPath = root.join("tipoRecebivel").<Integer> get("id");
		Path<Integer> situacaoPath = root.join("situacaoRecebivel").<Integer> get("id");
		//Path<Date> dataVencimentoPath = root.<Date> get("dataVencimento");

		List<Predicate> predicates = new ArrayList<Predicate>();

		if (clienteId != null) {
			Predicate clienteIdIgual = criteriaBuilder.equal(clienteIdPath, clienteId);
			predicates.add(clienteIdIgual);
		}

		if (bandeiraId != null) {
			Predicate bandeiraIdIgual = criteriaBuilder.equal(bandeiraIdPath,
					bandeiraId);
			predicates.add(bandeiraIdIgual);
		}
		
		if (tipoId != null) {
			Predicate tipoIdIgual = criteriaBuilder.equal(tipoIdPath,
					tipoId);
			predicates.add(tipoIdIgual);
		}
		
		Predicate situacaoIgual = criteriaBuilder.equal(situacaoPath, 1);
		predicates.add(situacaoIgual);
		
//		if (tipoId != null) {
//			Predicate dataVencimentoIgual = criteriaBuilder.between(dataVencimentoPath, dataInicial, dataFinal);
//			predicates.add(dataVencimentoIgual);
//		}
		
		query.where((Predicate[]) predicates.toArray(new Predicate[0]));

		TypedQuery<Cartao> typedQuery = manager.createQuery(query);
		typedQuery.setHint("org.hibernate.cacheable", "true");

		return typedQuery.getResultList();
	}
	
}
