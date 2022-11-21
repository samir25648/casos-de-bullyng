package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Transactional
    @Query("SELECT c FROM comments c WHERE mensaje_id=?1 ")
    List<Comment> findAllCommentsByMensajeId(Long mensajeId);

}
