package br.com.miniparejb.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

@Entity
public class Cliente {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="{nome.vazio}")
	private String nome;
	
	@NotBlank(message="{cpf.vazio}")
	private String cpf;
	
	@NotBlank(message="{email.vazio}")
	@NotBlank(message="{email.invalido}")
	private String email;
	
	@Temporal(TemporalType.DATE)
	private Date dataNascimento;
	
	@Column
	private Boolean bolAtivo = true;

	@OneToOne	
	private Conta conta;
	
	//Getters and Setters
	public Boolean getBolAtivo() {
		return bolAtivo;
	}
	public void setBolAtivo(Boolean bolAtivo) {
		this.bolAtivo = bolAtivo;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public Date getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
    public Conta getConta() {
		return conta;
	}
	public void setConta(Conta conta) {
		this.conta = conta;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nome=" + nome + ", cpf=" + cpf + ", dataNascimento=" + dataNascimento
				+ ", conta=" + conta + ", bolAtivo=" + bolAtivo + "]";
	}	
}
