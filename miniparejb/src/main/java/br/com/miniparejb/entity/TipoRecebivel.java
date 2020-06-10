package br.com.miniparejb.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TipoRecebivel {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String descTipoRecebivel;
	private Boolean bolAtivo;
	
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
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TipoRecebivel other = (TipoRecebivel) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "TipoRecebivel [id=" + id + ", descTipoRecebivel=" + descTipoRecebivel + ", bolAtivo=" + bolAtivo + "]";
	}
		
}
