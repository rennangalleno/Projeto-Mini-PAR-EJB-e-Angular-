package br.com.miniparejb.business;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.com.miniparejb.dao.ChequeDAO;
import br.com.miniparejb.dao.SituacaoRecebivelDAO;
import br.com.miniparejb.dao.TipoRecebivelDAO;
import br.com.miniparejb.entity.Cheque;

@Stateless
public class ChequeBusiness {

	@EJB
	private ChequeDAO chequeDao;
		
	@EJB
	private SituacaoRecebivelDAO situacaoDao;
	
	@EJB
	private TipoRecebivelDAO tipoDao;
			
	public void novoGravar(Cheque cheque){
		cheque.setDataCriacao(new Date());
		cheque.setSituacaoRecebivel(situacaoDao.find(1));
		cheque.setTipoRecebivel(tipoDao.find(2));
		chequeDao.gravar(cheque);
	}
	
	public List<Cheque> listaCheque() {
		 return chequeDao.listar();
	}
	
	public List<Cheque> consultaCheque(Long clienteId, Long pagadorId) {
		return chequeDao.consultar(clienteId, pagadorId);
	}
		
	public Cheque find( Long id) {
		return chequeDao.find(id);				
	}
	
	public void editaGravar(Cheque chequeDto) {
		System.out.println("Cheque recebido do front: "+chequeDto);
		
		Cheque cheque = chequeDao.find(chequeDto.getId());
		
		System.out.println("Cheque pego da base: "+cheque);
		
		cheque.setCliente(chequeDto.getCliente());
		cheque.setPagador(chequeDto.getPagador());
		cheque.setDataVencimento(chequeDto.getDataVencimento());
		cheque.setValor(chequeDto.getValor());
		
		System.out.println("Cheque atualizado: "+cheque);
		chequeDao.gravar(cheque);
	}
	
	public void deletar(Long id ) {		
		Cheque cheque = chequeDao.find(id);
		cheque.setSituacaoRecebivel(situacaoDao.find(3));		
		chequeDao.gravar(cheque);
	}		
}