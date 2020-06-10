package br.com.miniparejb.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import br.com.miniparejb.entity.Cheque;
import br.com.miniparejb.entity.Pagador;
import br.com.miniparejb.entity.SituacaoRecebivel;
import br.com.miniparejb.entity.TipoRecebivel;

public class ChequeDto {

	private Long id;
	private Pagador pagador;
	private TipoRecebivel tipoRecebivel;
	private ClienteDto cliente;
	private SituacaoRecebivel situacaoRecebivel;
	private Date dataCriacao; 
	private Date dataVencimento;
	private BigDecimal valor;
	
	public Long getId() {
		return id;
	}

	public Pagador getPagador() {
		return pagador;
	}

	public TipoRecebivel getTipoRecebivel() {
		return tipoRecebivel;
	}

	public ClienteDto getCliente() {
		return cliente;
	}

	public SituacaoRecebivel getSituacaoRecebivel() {
		return situacaoRecebivel;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public Date getDataVencimento() {
		return dataVencimento;
	}

	public BigDecimal getValor() {
		return valor;
	}


	public ChequeDto(Cheque cheque) {
				
		this.id = cheque.getId();
		this.pagador = cheque.getPagador();
		this.tipoRecebivel = cheque.getTipoRecebivel();
		this.cliente = new ClienteDto(cheque.getCliente());
		this.situacaoRecebivel = cheque.getSituacaoRecebivel();
		this.dataCriacao = cheque.getDataCriacao();
		this.dataVencimento = cheque.getDataVencimento();
		this.valor = cheque.getValor();
	}
	
	public static List<ChequeDto> converte(List<Cheque> cheques) {
		return cheques.stream()
				.map(ChequeDto::new)
				.collect(Collectors.toList());
		}	
}
