package com.leonardobrancalhao.curso;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "teste")
public class Teste {
	
	@GetMapping
	public String get() {
		return "Respondendo a requisição GET em /teste";
	}

}
