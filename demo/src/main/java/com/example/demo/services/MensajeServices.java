package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelos.Mensaje;
import com.example.demo.modelos.Usuario;
import com.example.demo.repository.MensajeRepositoy;

@Service
public class MensajeServices {

    @Autowired
    MensajeRepositoy repository;

    public Mensaje saveMensaje(Mensaje mensaje) {
        return repository.save(mensaje);
    }

    public void deleteMensaje(Long id) {
        repository.deleteById(id);
    }

    public void updateMensaje(Mensaje mensaje) {
        repository.updateState(mensaje.getId(), mensaje.isEstado());
    }

    public Iterable<Mensaje> findAllMensaje() {
        return repository.findAll();
    }

    public Iterable<Mensaje> findAllByUser(Usuario usuario) {
        return repository.findByUsuario(usuario);
    }

    public Mensaje findById(Long id) {
        return repository.findById(id).get();
    }

}
