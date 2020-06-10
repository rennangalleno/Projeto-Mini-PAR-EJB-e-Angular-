package br.com.miniparejb.mapper;

import java.util.stream.Collectors;

import javax.validation.ConstraintViolationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import br.com.miniparejb.dto.MensagemErroDto;


@Provider
public class ConstraintValidationMapper implements ExceptionMapper<ConstraintViolationException> {

	@Override
	public Response toResponse(ConstraintViolationException e) {		
		return Response
	            .status(Response.Status.BAD_REQUEST)
	            .entity(MensagemErroDto.build(
	                    e.getConstraintViolations()
	                        .stream()
	                        .map(constraintViolation -> constraintViolation.getMessage())
	                        .collect(Collectors.toList())))
	            .build();
	}

}
