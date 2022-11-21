package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.MensajeDTO;
import com.example.demo.modelos.Mensaje;
import com.example.demo.modelos.Usuario;
import com.example.demo.services.MensajeServices;
import com.example.demo.services.UserServices;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/mensaje")
public class MensajeController {

    @Autowired
    private MensajeServices mensajeServices;

    @Autowired
    private UserServices userServices;

    @GetMapping("")
    public ResponseEntity<Iterable<Mensaje>> getAllMensajes() {
        try {
            Iterable<Mensaje> mensajes = mensajeServices.findAllMensaje();
            return ResponseEntity.ok().body(mensajes);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Iterable<Mensaje>> getMensajesByUserId(@PathVariable("id") Long id) {
        try {
            Usuario usuario = userServices.findByUserId(id);
            Iterable<Mensaje> mensajes = mensajeServices.findAllByUser(usuario);
            System.out.println(id);
            return ResponseEntity.ok().body(mensajes);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Mensaje> createMensaje(@RequestBody MensajeDTO mensaje) {
        try {
            System.out.println(mensaje);
            Usuario usuario = userServices.findByUserId(mensaje.getUserId());

            Mensaje newMensaje = new Mensaje();
            newMensaje.setBody(mensaje.getBody());
            newMensaje.setEstado(mensaje.isEstado());
            newMensaje.setUsuario(usuario);

            Mensaje mensajeSave = mensajeServices.saveMensaje(newMensaje);

            return ResponseEntity.ok().body(mensajeSave);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<Mensaje> putMensaje(@RequestBody MensajeDTO mensajeDTO, @PathVariable("id") Long id) {
        try {
            Mensaje mensaje = new Mensaje();
            mensaje.setId(id);
            mensaje.setEstado(mensajeDTO.isEstado());

            mensajeServices.updateMensaje(mensaje);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Mensaje>> deleteMensaje(@PathVariable("id") Long id) {
        try {
            mensajeServices.deleteMensaje(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
