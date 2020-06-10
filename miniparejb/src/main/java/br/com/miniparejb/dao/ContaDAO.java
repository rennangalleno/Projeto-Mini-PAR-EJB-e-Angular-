package br.com.miniparejb.dao;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.miniparejb.entity.Conta;

@Stateless
public class ContaDAO {
	
	@PersistenceContext
	private EntityManager manager;
	
	public void gravar(Conta conta) {
		System.out.println("Estou contaDAO "+conta);
		
		if(conta.getId()==null) {
			manager.persist(conta);
		}else {
			manager.merge(conta);
		}
		
	}
	
	public Long findNumero(){	
		Long quantidade = manager.createQuery("select count(c) from Conta c", Long.class).getSingleResult();		
		return quantidade;
	}
	
	public Conta find(Long id) {
		return manager.find(Conta.class, id);
	}
		
}
