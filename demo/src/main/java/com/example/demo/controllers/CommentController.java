package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CommentDTO;
import com.example.demo.modelos.Comment;
import com.example.demo.services.CommentServices;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {

    @Autowired
    CommentServices commentServices;

    @GetMapping("")
    public ResponseEntity<List<Comment>> getAllCommentByMsjId(@RequestParam Long mensajeid) {
        try {
            List<Comment> comments = commentServices.findAllCommentsByMensajeId(mensajeid);

            return ResponseEntity.ok().body(comments);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("{id}")
    public ResponseEntity<Comment> postComment(@PathVariable("id") Long id, @RequestBody CommentDTO commentDTO) {
        try {
            commentDTO.setId(id);
            Comment saveComment = commentServices.createComment(commentDTO);

            return ResponseEntity.ok().body(saveComment);
        } catch (Exception e) {
            System.out.println("hola: " + e.getMessage());
            return ResponseEntity.internalServerError().build();
        }
    }
}
