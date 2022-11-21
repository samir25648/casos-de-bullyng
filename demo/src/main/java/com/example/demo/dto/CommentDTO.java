package com.example.demo.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommentDTO implements Serializable {

    @JsonProperty("comment_id")
    private Long id;

    private String body;

    @JsonProperty("user_id")
    private Long userId;

    @JsonProperty("mensaje_id")
    private Long mensajeId;
}
