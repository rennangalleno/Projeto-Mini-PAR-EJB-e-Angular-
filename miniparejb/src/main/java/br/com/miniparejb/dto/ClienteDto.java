package br.com.miniparejb.dto;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import br.com.miniparejb.entity.Cliente;

public class ClienteDto {
	
	private Long id;
	private String nome;
	private String cpf;
	private String email;
	private Date dataNascimento;
	
	public ClienteDto(Cliente cliente) {
		this.id = cliente.getId();
		this.nome = cliente.getNome();
		this.cpf = cliente.getCpf();
		this.email = cliente.getEmail();
		this.dataNascimento = cliente.getDataNascimento();
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getCpf() {
		return cpf;
	}

	public String getEmail() {
		return email;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}
	
	public static List<ClienteDto> converte(List<Cliente> clientes) {
		return clientes.stream()
			.map(ClienteDto::new)
			.collect(Collectors.toList());
	}	
}
