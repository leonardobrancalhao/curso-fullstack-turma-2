package com.leonardobrancalhao.curso.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardobrancalhao.curso.model.Categoria;
import com.leonardobrancalhao.curso.repository.CategoriaRepository;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository repository;

	public Categoria salvar(Categoria categoria) throws Exception {
		if (categoria == null) {
			throw new Exception("Parametros invalidos");
		}

		if (categoria.getNome() == null || categoria.getNome().isEmpty()) {
			throw new Exception("Nome invalido");
		}

		return repository.save(categoria);
	}

	public List<Categoria> listar() {
		return repository.findAll();
	}

	public List<Categoria> listarPorNome(String nome) {
		if (nome == null || nome.trim().isEmpty()) {
			return new ArrayList<Categoria>();
		}

		return repository.findByNomeContainsOrderByNome(nome);
	}

	public Categoria listar(Integer id) throws Exception {
		if (id == null || id <= 0) {
			throw new Exception("Parametro invalido");
		}

		return repository.findById(id).get();
	}

	public void remover(Integer id) throws Exception {
		if (id == null || id <= 0) {
			throw new Exception("Parametro invalido");
		}

		repository.deleteById(id);
	}

}
