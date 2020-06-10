package br.com.miniparejb.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.miniparejb.entity.TipoRecebivel;

@Stateless
public class TipoRecebivelDAO {

	@PersistenceContext
	private EntityManager manager;
	
	public List<TipoRecebivel> listaTipoRecebivel(){
		return manager.createQuery("select t from TipoRecebivel t", TipoRecebivel.class).getResultList();
	}	
	
	public TipoRecebivel find(Integer tipo) {
		return  manager.find(TipoRecebivel.class, tipo);
	}	
}
