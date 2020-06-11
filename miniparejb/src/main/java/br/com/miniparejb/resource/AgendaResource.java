package br.com.miniparejb.resource;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.miniparejb.business.AgendaBusiness;
import br.com.miniparejb.entity.Boleto;
import br.com.miniparejb.entity.Cartao;
import br.com.miniparejb.entity.Cheque;

@Path("recebiveis")
public class AgendaResource {

	@EJB
	private AgendaBusiness agendaBusiness;
	
	@GET
	@Path("/cliente")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findCliente(@QueryParam("cpf") String cpf) {
		return Response.ok(agendaBusiness.findCliente(cpf)).build();
	}
	
	@GET
	@Path("/tipos")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listaTipoRecebive () {
		return Response.ok(agendaBusiness.listaTipoRecebivel()).build() ;
	}
	
	@GET
	@Path("/cheques")
	@Produces(MediaType.APPLICATION_JSON)
	public Response	listaCheque(@QueryParam("clienteId") Long clienteId) {		
		return Response.ok(agendaBusiness.listaCheque(clienteId)).build();
	}

	@GET
	@Path("/boletos")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listaBoleto(@QueryParam("clienteId") Long clienteId) {		
		return Response.ok(agendaBusiness.listaBoleto(clienteId)).build();
	}

	@GET
	@Path("/cartoes")
	@Produces(MediaType.APPLICATION_JSON)
	public Response listaCartao(@QueryParam("clienteId") Long clienteId) {		
		return Response.ok(agendaBusiness.listaCartao(clienteId)).build();
	}

	@GET
	@Path("/cheques/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultaCheque(
			@QueryParam("clienteId") Long clienteId, 
			@QueryParam("tipoId") Integer tipoId, 
			@QueryParam("pagadorId") Long pagadorId /*Date dataInicial, Date dataFinal*/){
		List<Cheque> cheques = agendaBusiness.consultaCheque(clienteId, tipoId, pagadorId /*,dataInicial, dataFinal*/);
		return Response.ok(cheques).build();
	}

	@GET
	@Path("/boletos/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultaBoleto(
			@QueryParam("clienteId") Long clienteId, 
			@QueryParam("tipoId") Integer tipoId, 
			@QueryParam("pagadorId") Long pagadorId /*Date dataInicial, Date dataFinal*/){
		List<Boleto> boletos = agendaBusiness.consultaBoleto(clienteId, tipoId, pagadorId /*,dataInicial, dataFinal*/);
		return Response.ok(boletos).build();
	}

	@GET
	@Path("/cartoes/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultaCartao(
			@QueryParam("clienteId") Long clienteId, 
			@QueryParam("tipoId") Integer tipoId, 
			@QueryParam("bandeiraId") Integer bandeiraId /*Date dataInicial, Date dataFinal*/){
		List<Cartao> cartoes = agendaBusiness.consultaCartao(clienteId, bandeiraId, tipoId /*,dataInicial, dataFinal*/);
		return Response.ok(cartoes).build();	
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

