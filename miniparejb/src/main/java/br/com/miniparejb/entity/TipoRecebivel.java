package br.com.miniparejb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TipoRecebivel {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String descTipoRecebivel;
	
	@Column
	private Boolean bolAtivo;
	
	//Getters and Setters
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDescTipoRecebivel() {
		return descTipoRecebivel;
	}
	public void setDescTipoRecebivel(String descTipoRecebivel) {
		this.descTipoRecebivel = descTipoRecebivel;
	}
	public Boolean getBolAtivo() {
		return bolAtivo;
	}
	public void setBolAtivo(Boolean bolAtivo) {
		this.bolAtivo = bolAtivo;
	}
		
	@Override
	public String toString() {
		return "TipoRecebivel [id=" + id + ", descTipoRecebivel=" + descTipoRecebivel + ", bolAtivo=" + bolAtivo + "]";
	}
		
}
