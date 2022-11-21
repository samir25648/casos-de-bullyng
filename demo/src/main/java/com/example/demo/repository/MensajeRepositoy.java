package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Mensaje;
import com.example.demo.modelos.Usuario;

@Repository
public interface MensajeRepositoy extends JpaRepository<Mensaje, Long> {

    @Query("SELECT m FROM mensajes m")
    List<Mensaje> findAll();

    List<Mensaje> findByUsuario(Usuario usuario);

    @Transactional
    @Modifying
    @Query("update mensajes m set m.estado=:estado where m.id=:mensajeId")
    public void updateState(@Param("mensajeId") Long mensajeId, @Param("estado") boolean estado);
}
