package br.com.miniparejb.dto;

import java.util.Date;
import java.util.List;

public class MensagemErroDto {

	private List<String> mensagens;
	private Date dataErro;
	
	public List<String> getMensagens() {
		return mensagens;
	}
	public void setMensagens(List<String> mensagens) {
		this.mensagens = mensagens;
	}
	public Date getDataErro() {
		return dataErro;
	}
	public void setDataErro(Date dataErro) {
		this.dataErro = dataErro;
	}
	
	public static MensagemErroDto build(List<String> mensagens) {
		MensagemErroDto mensagemErroDto = new MensagemErroDto();
		mensagemErroDto.setMensagens(mensagens);
		mensagemErroDto.setDataErro(new Date());
		return mensagemErroDto;
	}	
}
