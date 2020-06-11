package br.com.miniparejb.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Cartao extends Recebivel{
	
	@ManyToOne
	@JoinColumn(name="bandeira_id")
	private Bandeira bandeira;

	//Getters and Setters
	public Bandeira getBandeira() {
		return bandeira;
	}

	public void setBandeira(Bandeira bandeira) {
		this.bandeira = bandeira;
	}

	@Override
	public String toString() {
		return "Cartao [bandeira=" + bandeira + "]";
	}
}
