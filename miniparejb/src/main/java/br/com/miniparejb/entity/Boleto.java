package br.com.miniparejb.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Boleto extends Recebivel {
	
	@ManyToOne
	@JoinColumn(name="pagador_id")
	private Pagador pagador;

	//Getters and Setters
	public Pagador getPagador() {
		return pagador;
	}

	public void setPagador(Pagador pagador) {
		this.pagador = pagador;
	}

	@Override
	public String toString() {
		return "Boleto [pagador=" + pagador + "]";
	}
}
