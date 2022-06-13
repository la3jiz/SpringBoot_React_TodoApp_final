package com.todo.todo_server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.todo_server.Modal.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {


	
}
