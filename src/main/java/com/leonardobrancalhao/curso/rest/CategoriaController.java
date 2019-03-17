package com.leonardobrancalhao.curso.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardobrancalhao.curso.model.Categoria;
import com.leonardobrancalhao.curso.service.CategoriaService;

@RestController
@RequestMapping("categorias")
public class CategoriaController {

	@Autowired
	private CategoriaService service;

	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody Categoria categoria) {
		service.salvar(categoria);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<?> listar() {
		return new ResponseEntity<>(service.listar(), HttpStatus.OK);
	}

}
