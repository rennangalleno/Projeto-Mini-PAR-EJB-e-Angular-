package br.com.miniparejb.mapper;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import br.com.miniparejb.exception.NegocioExeception;
import br.com.miniparejb.dto.MensagemErroDto;


@Provider
public class NegocioExceptionMapper implements ExceptionMapper<NegocioExeception>  {
	

	@Override
	public Response toResponse(NegocioExeception e) {		
		return Response
	            .status(Response.Status.BAD_REQUEST)
	            .entity(MensagemErroDto.build(e.getMensagens()))
	            .build();
	}
}
