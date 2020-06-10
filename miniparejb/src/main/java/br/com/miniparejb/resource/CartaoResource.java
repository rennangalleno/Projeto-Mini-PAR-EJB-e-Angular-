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

import br.com.miniparejb.business.CartaoBusiness;
import br.com.miniparejb.dto.CartaoDto;
import br.com.miniparejb.entity.Bandeira;
import br.com.miniparejb.entity.Cartao;

@Path("cartoes")
public class CartaoResource {

	@EJB
	private CartaoBusiness cartaoBusiness;

	@GET
	@Path("/bandeiras")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Bandeira> listaBandeira(){
		return cartaoBusiness.listaBandeira();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response novoGravar(Cartao cartao){
		cartaoBusiness.novoGravar(cartao);
		return Response.status(201).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listaCartao() {
		return Response.ok(CartaoDto.convert(cartaoBusiness.listaCartao())).build();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response find(@PathParam("id") Long id) {
		return Response.ok(new CartaoDto(cartaoBusiness.find(id))).build();				
	}

	@GET
	@Path("/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultaCartao(
			@QueryParam ("clienteId") Long clienteId, 
			@QueryParam ("bandeiraId") Integer bandeiraId) {
					
		//Integer bandeiraId = Integer.parseInt(bandeiraIdString);
		//Long clienteId = Long.parseLong(clienteIdString);

		List<Cartao> cartoes = cartaoBusiness.consultaCartao(clienteId, bandeiraId);
		return Response.ok(CartaoDto.convert(cartoes)).build();
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response editaGravar(Cartao cartao) {
		cartaoBusiness.editaGravar(cartao);
		return Response.ok(cartao).build();
	}

	@DELETE
	@Path("{id}")
	public Response deletar(@PathParam("id") Long id ) {		
		cartaoBusiness.deletar(id);
		return Response.noContent().build();
	}			
}
