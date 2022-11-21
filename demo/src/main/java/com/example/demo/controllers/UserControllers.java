package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.LoginUsuario;
import com.example.demo.modelos.Usuario;
import com.example.demo.services.UserServices;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/usuario")
public class UserControllers {

    @Autowired
    UserServices userServices;

    @GetMapping("")
    public List<Usuario> getUsuarios() {
        return userServices.findAllUsers();
    }

    @GetMapping("{id}")
    public ResponseEntity<Usuario> getUsuariosById(@PathVariable("id") String id) {
        try {
            Usuario usuario = userServices.findByUserId(Long.parseLong(id));

            return ResponseEntity.ok().body(usuario);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        try {
            if (userServices.existsByEmail(usuario.getEmail())) {
                return ResponseEntity.badRequest().build();
            }

            Usuario createdUsuario = userServices.crearUsuario(usuario);

            return ResponseEntity.ok().body(createdUsuario);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginUsuario loginUsuario) {
        try {
            Usuario usuario = userServices.findByEmail(loginUsuario.getEmail());

            if (loginUsuario.getPassword().equals(usuario.getPassword())) {
                return ResponseEntity.ok().body(usuario);
            }

            return ResponseEntity.badRequest().build();

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        try {
            userServices.deleteById(id);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
