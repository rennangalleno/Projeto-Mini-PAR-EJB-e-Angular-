package br.com.miniparejb.business;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.miniparejb.dao.ClienteDAO;
import br.com.miniparejb.dao.ContaDAO;
import br.com.miniparejb.entity.Cliente;
import br.com.miniparejb.entity.Conta;

@Stateless
public class ClienteBusiness {
	
	@Inject
	private ClienteDAO clienteDao;
	
	@Inject
	private ContaDAO contaDao;
					
	public void gravar(Cliente cliente) {
		
		Conta conta = new Conta();
		conta.setNumero(1000 + contaDao.findNumero());
		contaDao.gravar(conta);	
		
		clienteDao.gravar(cliente, conta.getId());	
	}	
	
	public List<Cliente> listarCliente() {
		return clienteDao.listar();
	}
	
	public List<Cliente> consultarCliente(String nome, String cpf) {
		 return clienteDao.consultar(nome, cpf);
	}
		
	public Cliente findCliente(Long id) {
		return clienteDao.find(id);
	}
		
	public void atualizar(Cliente clienteDto) {
		System.out.println(clienteDto);
		
		Cliente cliente = clienteDao.find(clienteDto.getId());
		cliente.setCpf(clienteDto.getCpf());
		cliente.setNome(clienteDto.getNome());
		cliente.setEmail(clienteDto.getEmail());
		cliente.setDataNascimento(clienteDto.getDataNascimento());
		
		System.out.println(cliente);
		
		clienteDao.atualizar(cliente);
	}	
	
	public void deletar(Long id) {
		
		Cliente cliente = clienteDao.find(id);
		cliente.setBolAtivo(false);
		
		Conta conta = cliente.getConta();
		conta.setBolAtivo(false);
				
		contaDao.gravar(conta);
		clienteDao.atualizar(cliente);
	}	 
	
}
