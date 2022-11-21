package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelos.Usuario;
import com.example.demo.repository.UserRepository;

@Service
public class UserServices {

    @Autowired
    UserRepository repository;

    // SELECT * FROM usuarios WHERE user_id = ?
    public Usuario findByUserId(Long userId) {
        Usuario usuario = repository.findById(userId).get();
        return usuario;
    }

    // SELECT * FROM usuarios
    public List<Usuario> findAllUsers() {
        List<Usuario> usuarios = repository.findAll();
        return usuarios;
    }

    public Boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public Usuario crearUsuario(Usuario usuario) {
        return repository.save(usuario);
    }

    public Usuario findByEmail(String email) {
        return repository.findByEmail(email);
    }

    // DELETE FROM usuarios WHERE user_id = ?
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
