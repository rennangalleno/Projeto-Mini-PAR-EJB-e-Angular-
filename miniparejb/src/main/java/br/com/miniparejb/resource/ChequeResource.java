package br.com.miniparejb.resource;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.miniparejb.business.ChequeBusiness;
import br.com.miniparejb.dto.ChequeDto;
import br.com.miniparejb.entity.Cheque;

@Path("cheques")
public class ChequeResource {

	@EJB
	private ChequeBusiness chequeBusiness;

	@POST	
	@Consumes(MediaType.APPLICATION_JSON)
	public Response novoGravar(Cheque cheque){
		chequeBusiness.novoGravar(cheque);
		return Response.status(201).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listaCheque() {
		return Response.ok(ChequeDto.converte(chequeBusiness.listaCheque())).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response find(@PathParam("id") Long id) {
		return Response.ok(new ChequeDto(chequeBusiness.find(id))).build();				
	}

	@GET
	@Path("/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultaCheque(
			@QueryParam("clienteId") Long clienteId,
			@QueryParam("pagadorId") Long pagadorId) {
		
		System.out.println("clienteId: "+clienteId);
		System.out.println("pagadorId: "+pagadorId);
		
		List<Cheque> cheques = chequeBusiness.consultaCheque(clienteId, pagadorId);
		return Response.ok(ChequeDto.converte(cheques)).build();
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)	
	public Response editaGravar(Cheque cheque) {
		chequeBusiness.editaGravar(cheque);
		return Response.ok(cheque).build();
	}

	@DELETE
	@Path("{id}")
	public Response deletar(@PathParam("id") Long id) {				
		chequeBusiness.deletar(id);
		return Response.noContent().build();
	}	
}
