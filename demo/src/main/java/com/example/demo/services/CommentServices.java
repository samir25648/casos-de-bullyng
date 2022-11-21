package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CommentDTO;
import com.example.demo.modelos.Comment;
import com.example.demo.modelos.Usuario;
import com.example.demo.repository.CommentRepository;

@Service
public class CommentServices {

    @Autowired
    CommentRepository repository;

    @Autowired
    UserServices userServices;

    public List<Comment> findAllCommentsByMensajeId(Long mensajeId) {
        return repository.findAllCommentsByMensajeId(mensajeId);
    }

    public Comment createComment(CommentDTO commentDTO) {
        Comment comment = new Comment();
        Usuario usuario = userServices.findByUserId(commentDTO.getUserId());

        comment.setBody(commentDTO.getBody());
        comment.setMensajeId(commentDTO.getId());
        comment.setUsuario(usuario);

        return repository.save(comment);
    }

}
