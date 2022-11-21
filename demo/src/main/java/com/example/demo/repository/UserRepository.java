package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.modelos.Usuario;

@Repository
public interface UserRepository extends JpaRepository<Usuario, Long> {

    Boolean existsByEmail(String email);

    Usuario findByEmail(String email);

    @Query("SELECT u FROM usuarios u WHERE u.rol = 'alumno'")
    List<Usuario> findAll();
}
