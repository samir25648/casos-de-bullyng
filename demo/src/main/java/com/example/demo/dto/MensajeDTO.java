package com.example.demo.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MensajeDTO implements Serializable {

    @JsonProperty("mensaje_id")
    private Long id;

    private String body;

    private boolean estado;

    @JsonProperty("user_id")
    private Long userId;
}
