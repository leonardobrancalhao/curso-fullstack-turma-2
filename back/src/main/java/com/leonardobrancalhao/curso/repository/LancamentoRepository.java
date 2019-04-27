package com.leonardobrancalhao.curso.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leonardobrancalhao.curso.model.Lancamento;

public interface LancamentoRepository extends JpaRepository<Lancamento, Integer> {

}
