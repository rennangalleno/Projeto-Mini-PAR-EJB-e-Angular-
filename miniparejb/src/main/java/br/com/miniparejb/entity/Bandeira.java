package br.com.miniparejb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bandeira {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String nomeBandeira;
	
	@Column
	private Integer bolAtivo;
	
	//Getters and Setters
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNomeBandeira() {
		return nomeBandeira;
	}
	public void setNomeBandeira(String nomeBandeira) {
		this.nomeBandeira = nomeBandeira;
	}
	public Integer getBolAtivo() {
		return bolAtivo;
	}
	public void setBolAtivo(Integer bolAtivo) {
		this.bolAtivo = bolAtivo;
	}
		
	@Override
	public String toString() {
		return "Bandeira [id=" + id + ", nomeBandeira=" + nomeBandeira + ", bolAtivo=" + bolAtivo + "]";
	}	
}
