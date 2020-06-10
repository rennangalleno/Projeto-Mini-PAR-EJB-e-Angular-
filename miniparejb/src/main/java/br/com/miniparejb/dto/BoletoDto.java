package br.com.miniparejb.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import br.com.miniparejb.entity.Boleto;
import br.com.miniparejb.entity.Pagador;
import br.com.miniparejb.entity.SituacaoRecebivel;
import br.com.miniparejb.entity.TipoRecebivel;

public class BoletoDto {

	private Long id;
	private Pagador pagador;
	private TipoRecebivel tipoRecebivel;
	private ClienteDto cliente;
	private SituacaoRecebivel situacaoRecebivel;	
	private Date dataCriacao; 
	private Date dataVencimento;	
	private BigDecimal valor;
		
	public BoletoDto(Boleto boleto) {	
		this.id = boleto.getId();
		this.pagador = boleto.getPagador();
		this.tipoRecebivel = boleto.getTipoRecebivel();
		this.cliente = new ClienteDto(boleto.getCliente());
		this.situacaoRecebivel = boleto.getSituacaoRecebivel();
		this.dataCriacao = boleto.getDataCriacao();
		this.dataVencimento = boleto.getDataVencimento();
		this.valor = boleto.getValor();
	}

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
	
	public static List<BoletoDto> convert(List<Boleto> boletos){
		return boletos.stream()
				.map(BoletoDto::new)
				.collect(Collectors.toList()); 
	}
}
