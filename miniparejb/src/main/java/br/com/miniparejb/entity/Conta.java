package br.com.miniparejb.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Conta {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Integer agencia = 351;
	
	@Column
	private Long numero;
	
	@Column
	private BigDecimal saldo = new BigDecimal(0);
	
	@Column
	private Boolean bolAtivo = true;

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
	public Integer getAgencia() {
		return agencia;
	}
	public void setAgencia(Integer agencia) {
		this.agencia = agencia;
	}
	public Long getNumero() {
		return numero;
	}
	public void setNumero(Long numero) {
		this.numero = numero;
	}
	public BigDecimal getSaldo() {
		return saldo;
	}
	public void setSaldo(BigDecimal saldo) {
		this.saldo = saldo;
	}
	
	@Override
	public String toString() {
		return "Conta [id=" + id + ", agencia=" + agencia + ", numero=" + numero + ", saldo=" + saldo + ", bolAtivo="
				+ bolAtivo + "]";
	}
}
