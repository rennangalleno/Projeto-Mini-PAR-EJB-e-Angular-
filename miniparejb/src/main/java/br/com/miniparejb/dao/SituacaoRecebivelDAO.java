package br.com.miniparejb.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import br.com.miniparejb.entity.SituacaoRecebivel;

@Stateless @Transactional
public class SituacaoRecebivelDAO {

	@PersistenceContext
	private EntityManager manager;
	
	public List<SituacaoRecebivel> listaSituacaoRecebivel(){
		return manager.createQuery("select s from SituacaoRecebivel s", SituacaoRecebivel.class).getResultList();
	}	
	
	public SituacaoRecebivel find(Integer situacao) {
		return  manager.find(SituacaoRecebivel.class, situacao);
	}
}
