package br.com.miniparejb.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public class Recebivel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="tipo_id")
	private TipoRecebivel tipoRecebivel;
	
	@ManyToOne
	@JoinColumn(name="cliente_id")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name="situacao_id")
	private SituacaoRecebivel situacaoRecebivel;
	
	@ManyToOne
	@JoinColumn(name="lote_id")
	private Lote<?> lote;
	
	@Temporal(TemporalType.DATE)
	private Date dataCriacao; 
		
	@Temporal(TemporalType.DATE)
	private Date dataVencimento;
	
	private BigDecimal valor;
	
	//Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public TipoRecebivel getTipoRecebivel() {
		return tipoRecebivel;
	}

	public void setTipoRecebivel(TipoRecebivel tipoRecebivel) {
		this.tipoRecebivel = tipoRecebivel;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public SituacaoRecebivel getSituacaoRecebivel() {
		return situacaoRecebivel;
	}

	public void setSituacaoRecebivel(SituacaoRecebivel situacaoRecebivel) {
		this.situacaoRecebivel = situacaoRecebivel;
	}

	public Lote<?> getLote() {
		return lote;
	}

	public void setLote(Lote<?> lote) {
		this.lote = lote;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Date getDataVencimento() {
		return dataVencimento;
	}

	public void setDataVencimento(Date dataVencimento) {
		this.dataVencimento = dataVencimento;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "Recebivel [id=" + id + ", tipoRecebivel=" + tipoRecebivel + ", cliente=" + cliente
				+ ", situacaoRecebivel=" + situacaoRecebivel + ", lote=" + lote + ", dataCriacao=" + dataCriacao
				+ ", dataVencimento=" + dataVencimento + ", valor=" + valor + "]";
	}
}
