package br.com.miniparejb.business;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.com.miniparejb.dao.AgendaDAO;
import br.com.miniparejb.dao.ClienteDAO;
import br.com.miniparejb.dao.TipoRecebivelDAO;
import br.com.miniparejb.entity.Boleto;
import br.com.miniparejb.entity.Cartao;
import br.com.miniparejb.entity.Cheque;
import br.com.miniparejb.entity.Cliente;
import br.com.miniparejb.entity.TipoRecebivel;

@Stateless
public class AgendaBusiness {
	
	@EJB
	private ClienteDAO clienteDao;
	
	@EJB
	private TipoRecebivelDAO tipoDao;
		
	@EJB
	private AgendaDAO agendaDao;
	
	public List<Cliente> escolheCliente() {
		return clienteDao.listar(); 	
	}
	
	public List<TipoRecebivel> listaTipoRecebivel(){
		return tipoDao.listaTipoRecebivel();
	}
	
	public List<Cheque> listaCheque(Long clienteId) {		
		return agendaDao.listaCheque(clienteId);
	}
	
	public List<Boleto> listaBoleto(Long clienteId) {		
		return agendaDao.listaBoleto(clienteId);
	}
	
	public List<Cartao> listaCartao(Long clienteId) {		
		return agendaDao.listaCartao(clienteId);
	}
	
	public Cliente findCliente(String cpf) {
		return clienteDao.buscaCliente(cpf);
	}
	
	public List<Cheque> consultaCheque(Long clienteId, Integer tipoId, Long pagadorId /*Date dataInicial, Date dataFinal*/){
		return agendaDao.consultaCheque(clienteId, pagadorId, tipoId /*,dataInicial, dataFinal*/);
	}
	
	public List<Boleto> consultaBoleto(Long clienteId, Integer tipoId, Long pagadorId /*Date dataInicial, Date dataFinal*/){
		return agendaDao.consultaBoleto(clienteId, pagadorId, tipoId /*,dataInicial, dataFinal*/);
	}
	
	public List<Cartao> consultaCartao(Long clienteId, Integer tipoId, Integer bandeiraId /*Date dataInicial, Date dataFinal*/){
		return agendaDao.consultaCartao(clienteId, bandeiraId, tipoId /*,dataInicial, dataFinal*/);
	}
		
	
//	public List<TipoRecebivel> criarRemessa (Cliente clienteAgenda, Long boletoId, Long chequeId, Long cartaoId) {
//		List<TipoRecebivel> tipos = tipoDao.listaTipoRecebivel();
//		List<Bandeira> bandeiras = cartaoDao.listaBandeira();
//		List<Pagador> pagadores = pagadorDao.lista();
//		List<Cheque> cheques = agendaDao.listaCheque(clienteAgenda.getId() /*,dataInicial, dataFinal*/);
//		List<Boleto> boletos = agendaDao.listaBoleto(clienteAgenda.getId()/*,dataInicial, dataFinal*/);
//		List<Cartao> cartoes = agendaDao.listaCartao(clienteAgenda.getId() /*,dataInicial, dataFinal*/);
//		Cliente cliente = clienteDao.find(clienteAgenda.getId());
//		return tipos;
//	}
}

