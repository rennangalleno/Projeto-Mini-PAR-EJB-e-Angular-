package br.com.miniparejb.resource;

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

import br.com.miniparejb.business.ClienteBusiness;
import br.com.miniparejb.dto.ClienteDto;
import br.com.miniparejb.entity.Cliente;

@Path("clientes")
public class ClienteResource {
	
	@EJB
	private ClienteBusiness clienteBusiness;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response gravar(Cliente cliente) {
		clienteBusiness.gravar(cliente);
		return Response.status(201).build();
	}	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarCliente() {
		return Response
				.ok(ClienteDto.converte(clienteBusiness.listarCliente()))
				.build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findCliente(@PathParam("id") Long id) {
		return Response
				.ok(clienteBusiness.findCliente(id))
				.build();
	}
	
	@GET
	@Path("/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultarCliente(
			@QueryParam("nome") String nome, 
			@QueryParam("cpf") String cpf) {
		 return Response
				 .ok(ClienteDto.converte(clienteBusiness.consultarCliente(nome, cpf)))
				 .build();
	}
				
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualizar(Cliente cliente) {	
		clienteBusiness.atualizar(cliente);
		return Response.ok(cliente).build();
	}	
	
	@DELETE
	@Path("{id}")
	public Response deletar(@PathParam("id") Long id) {
		clienteBusiness.deletar(id);
		return Response.noContent().build();
	}	 	
}
