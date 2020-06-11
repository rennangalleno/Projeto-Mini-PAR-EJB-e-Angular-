package br.com.miniparejb.business;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.com.miniparejb.dao.CartaoDAO;
import br.com.miniparejb.dao.SituacaoRecebivelDAO;
import br.com.miniparejb.dao.TipoRecebivelDAO;
import br.com.miniparejb.entity.Bandeira;
import br.com.miniparejb.entity.Cartao;

@Stateless
public class CartaoBusiness {

	@EJB
	private CartaoDAO cartaoDao;
			
	@EJB
	private SituacaoRecebivelDAO situacaoDao;
	
	@EJB
	private TipoRecebivelDAO tipoDao;
	
	public List<Bandeira> listaBandeira(){
		return cartaoDao.listaBandeira();
	}
	
	public void novoGravar(Cartao cartao){
		cartao.setDataCriacao(new Date());
		cartao.setSituacaoRecebivel(situacaoDao.find(1));
		cartao.setTipoRecebivel(tipoDao.find(1));
		cartaoDao.gravar(cartao);
	}
	
	public List<Cartao> listaCartao() {
		System.out.println("DAO: "+cartaoDao.listar()); 
		return cartaoDao.listar();
	}
	
	public List<Cartao> consultaCartao(Long clienteId, Integer bandeiraId) {
		return cartaoDao.consultar(clienteId, bandeiraId);
	}
		
	public Cartao find( Long id) {
		return cartaoDao.find(id);				
	}
	
	public void editaGravar(Cartao cartaoDto) {
		System.out.println("Cartão recebido do front: "+cartaoDto);
		
		Cartao cartao = cartaoDao.find(cartaoDto.getId());
		
		System.out.println("Cartão pego da base: "+cartao);
		
		cartao.setCliente(cartaoDto.getCliente());
		cartao.setBandeira(cartaoDto.getBandeira());
		cartao.setDataVencimento(cartaoDto.getDataVencimento());
		cartao.setValor(cartaoDto.getValor());
		
		System.out.println("Cartão atualizado: "+cartao);
		cartaoDao.gravar(cartao);
	}
	
	public void deletar(Long id ) {		
		Cartao cartao = cartaoDao.find(id);
		cartao.setSituacaoRecebivel(situacaoDao.find(3));		
		cartaoDao.gravar(cartao);
	}		
}