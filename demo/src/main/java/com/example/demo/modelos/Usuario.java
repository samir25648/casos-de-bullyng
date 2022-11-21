package com.example.demo.modelos;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "usuarios")
@Table(name = "usuarios")
public class Usuario {

    // AUTO INCREMENTABLE
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String nombre;

    private String apellido;

    private int edad;

    private String rol;

    private String email;

    private String password;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private Set<Mensaje> mensaje;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private Set<Comment> Comment;
}
