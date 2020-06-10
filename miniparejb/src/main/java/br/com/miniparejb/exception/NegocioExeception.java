package br.com.miniparejb.exception;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.ApplicationException;

@ApplicationException(rollback = true)
public class NegocioExeception extends Exception {

	private static final long serialVersionUID = 1L;

	private List<String> mensagens;
	
	public NegocioExeception() {
		super();
		this.mensagens = new ArrayList<String>();
	}
	
	public NegocioExeception(String mensagem) {
		super(mensagem);
		mensagens = new ArrayList<String>();
		mensagens.add(mensagem);
	}

	public List<String> getMensagens() {
		return mensagens;
	}

	public void addtMensagens(String mensagem) {
		this.mensagens.add(mensagem);
	}		
}
