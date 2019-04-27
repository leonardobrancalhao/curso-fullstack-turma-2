package com.leonardobrancalhao.curso.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardobrancalhao.curso.model.Lancamento;
import com.leonardobrancalhao.curso.repository.LancamentoRepository;

@Service
public class LancamentoService {

	@Autowired
	private LancamentoRepository repository;

	public Lancamento salvar(Lancamento lancamento) throws Exception {
		if (lancamento == null) {
			throw new Exception("Parametros invalidos");
		}
		
		if(lancamento.getDescricao() == null) {
			throw new Exception("Descricao invalida");
		}
		
		if(lancamento.getTipo() == null) {
			throw new Exception("Tipo invalido");
		}
		
		if(lancamento.getValor() == null ||
				lancamento.getValor().compareTo(BigDecimal.ZERO) <= 0) {
			throw new Exception("Valor invalido");
		}
		
		return repository.save(lancamento);
	}
	
	public List<Lancamento> listar() {
		return repository.findAll();
	}
	
	public Lancamento listar(Integer id) throws Exception {
		if(id == null || id <= 0) {
			throw new Exception("Parametro invalido");
		}
		
		return repository.findById(id).get();
	}
	
	public void remover(Integer id) throws Exception {
		if(id == null || id <= 0) {
			throw new Exception("Parametro invalido");
		}
		
		repository.deleteById(id);
	}

}
