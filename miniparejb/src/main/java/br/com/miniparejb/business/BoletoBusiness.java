package br.com.miniparejb.business;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.com.miniparejb.dao.BoletoDAO;
import br.com.miniparejb.dao.SituacaoRecebivelDAO;
import br.com.miniparejb.dao.TipoRecebivelDAO;
import br.com.miniparejb.entity.Boleto;

@Stateless
public class BoletoBusiness {

	@EJB
	private BoletoDAO boletoDao;
		
	@EJB
	private SituacaoRecebivelDAO situacaoDao;
	
	@EJB
	private TipoRecebivelDAO tipoDao;
			
	public void novoGravar(Boleto boleto){
		boleto.setDataCriacao(new Date());
		boleto.setSituacaoRecebivel(situacaoDao.find(1));
		boleto.setTipoRecebivel(tipoDao.find(3));
		boletoDao.gravar(boleto);
	}
	
	public List<Boleto> listaBoleto() {
		System.out.println("DAO: "+boletoDao.listar()); 
		return boletoDao.listar();
	}
	
	public List<Boleto> consultaBoleto(Long clienteId, Long pagadorId) {
		return boletoDao.consultar(clienteId, pagadorId);
	}
		
	public Boleto find( Long id) {
		return boletoDao.find(id);				
	}
	
	public void editaGravar(Boleto boletoDto) {
		System.out.println("Boleto recebido do front: "+boletoDto);
		
		Boleto boleto = boletoDao.find(boletoDto.getId());
		
		System.out.println("Boleto pego da base: "+boleto);
		
		boleto.setCliente(boletoDto.getCliente());
		boleto.setPagador(boletoDto.getPagador());
		boleto.setDataVencimento(boletoDto.getDataVencimento());
		boleto.setValor(boletoDto.getValor());
		
		System.out.println("Boleto atualizado: "+boleto);
		boletoDao.gravar(boleto);
	}
	
	public void deletar(Long id ) {		
		Boleto boleto = boletoDao.find(id);
		boleto.setSituacaoRecebivel(situacaoDao.find(3));		
		boletoDao.gravar(boleto);
	}		
}
