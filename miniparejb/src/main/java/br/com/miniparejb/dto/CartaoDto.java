package br.com.miniparejb.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import br.com.miniparejb.entity.Bandeira;
import br.com.miniparejb.entity.Cartao;
import br.com.miniparejb.entity.SituacaoRecebivel;
import br.com.miniparejb.entity.TipoRecebivel;

public class CartaoDto {

	private Long id;
	private Bandeira bandeira;
	private TipoRecebivel tipoRecebivel;
	private ClienteDto cliente;
	private SituacaoRecebivel situacaoRecebivel;
	private Date dataCriacao; 
	private Date dataVencimento;
	private BigDecimal valor;
	
	public CartaoDto(Cartao cartao) {
		
		this.id = cartao.getId();
		this.bandeira = cartao.getBandeira();
		this.tipoRecebivel = cartao.getTipoRecebivel();
		this.cliente = new ClienteDto(cartao.getCliente());
		this.situacaoRecebivel = cartao.getSituacaoRecebivel();
		this.dataCriacao = cartao.getDataCriacao();
		this.dataVencimento = cartao.getDataVencimento();
		this.valor = cartao.getValor();
	}

	public Long getId() {
		return id;
	}

	public Bandeira getBandeira() {
		return bandeira;
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
	
	public static List<CartaoDto> convert(List<Cartao> cartoes){
		return cartoes.stream()
				.map(CartaoDto::new)
				.collect(Collectors.toList());
	}
}
