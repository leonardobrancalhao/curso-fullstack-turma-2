package com.leonardobrancalhao.curso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leonardobrancalhao.curso.model.Categoria;
import com.leonardobrancalhao.curso.repository.CategoriaRepository;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository repository;

	public Categoria salvar(Categoria categoria) {
		if (categoria == null) {
			return null;
		}

		if (categoria.getNome() == null || categoria.getNome().isEmpty()) {
			return null;
		}

		return repository.save(categoria);
	}
	
	public List<Categoria> listar() {
		return repository.findAll();
	}

}
