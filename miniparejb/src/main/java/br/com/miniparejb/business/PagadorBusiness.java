package br.com.miniparejb.business;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.validation.Valid;

import br.com.miniparejb.dao.PagadorDAO;
import br.com.miniparejb.entity.Pagador;
import br.com.miniparejb.exception.NegocioExeception;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class PagadorBusiness {

	@Inject
	private PagadorDAO pagadorDao;	

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void gravar(@Valid Pagador pagador) throws NegocioExeception {

		if(pagador.getId() == null) {
			List<Pagador> pagadorExistente = pagadorDao.consultaPagadorExistente(pagador.getCpf(), pagador.getNome(), pagador.getEmail());
			if(!pagadorExistente.isEmpty()) {
				throw new NegocioExeception("Pagador já cadastrado");
			} 		
		}
		pagadorDao.gravar(pagador);
	}

	public List<Pagador> listarPagador() {
		return pagadorDao.listaPagador();
	}

	public List<Pagador> consultarPagador(String nome, String cpf) {
		return pagadorDao.consultaPagador(nome, cpf);
	}

	public Pagador find(Long id) {
		return pagadorDao.find(id);
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void deleta(Long id) {
		pagadorDao.deleta(id);
	}

}
