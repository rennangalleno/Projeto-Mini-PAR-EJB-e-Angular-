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

import br.com.miniparejb.business.BoletoBusiness;
import br.com.miniparejb.dto.BoletoDto;
import br.com.miniparejb.entity.Boleto;

@Path("boletos")
public class BoletoResource {

	@EJB
	private BoletoBusiness boletoBusiness;
		
	@POST	
	@Consumes(MediaType.APPLICATION_JSON)
	public Response novoGravar(Boleto boleto){
		boletoBusiness.novoGravar(boleto);
		return Response.status(201).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response listaBoleto() {
		return Response.ok(BoletoDto.convert(boletoBusiness.listaBoleto())).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response find(@PathParam("id") Long id) {
		return Response.ok(new BoletoDto(boletoBusiness.find(id))).build();				
	}
	
	@GET
	@Path("/consulta")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultaBoleto(
			@QueryParam("clienteId") Long clienteId,
			@QueryParam("pagadorId") Long pagadorId) {
		
		List<Boleto> boletos = boletoBusiness.consultaBoleto(clienteId, pagadorId);
		 return Response.ok(BoletoDto.convert(boletos)).build();
	}
		
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)	
	public Response editaGravar(Boleto boleto) {
		boletoBusiness.editaGravar(boleto);
		return Response.ok(boleto).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deletar(@PathParam("id") Long id) {				
		boletoBusiness.deletar(id);
		return Response.noContent().build();
		
	}		
}
