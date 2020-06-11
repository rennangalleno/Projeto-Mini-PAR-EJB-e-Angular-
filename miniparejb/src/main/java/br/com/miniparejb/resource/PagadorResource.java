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

import br.com.miniparejb.business.PagadorBusiness;
import br.com.miniparejb.entity.Pagador;
import br.com.miniparejb.exception.NegocioExeception;

@Path("pagadores")
public class PagadorResource {
	
	@EJB
	private PagadorBusiness pagadorBusiness;	
		
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listarPagador() {
		return Response.ok(pagadorBusiness.listarPagador()).build();
	}
			
	@POST
	@Consumes(MediaType.APPLICATION_JSON) 
	public Response gravar(Pagador pagador) throws NegocioExeception {
		pagadorBusiness.gravar(pagador);
		return Response.status(201).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response find(@PathParam("id") Long id) {
		return Response.ok(pagadorBusiness.find(id)).build();
	}
	
	@GET
	@Path("/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultarPagador(
			@QueryParam("nome") String nome, 
			@QueryParam("cpf") String cpf) {
		 return Response.ok(pagadorBusiness.consultarPagador(nome, cpf)).build();
	}
		
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualiza(Pagador pagador) throws NegocioExeception {		
		pagadorBusiness.gravar(pagador);
		return Response.ok(pagador).build();
	}
	
	@DELETE
	@Path("{id}")	
	public Response deleta(@PathParam("id") Long id) {
		pagadorBusiness.deleta(id);
		return Response.noContent().build();
	}	
}
