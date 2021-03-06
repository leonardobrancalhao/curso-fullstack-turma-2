package com.leonardobrancalhao.curso.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leonardobrancalhao.curso.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
	
	List<Categoria> findByNomeContainsOrderByNome(String nome);

}
