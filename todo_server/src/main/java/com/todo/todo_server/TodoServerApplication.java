package com.todo.todo_server;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


import com.todo.todo_server.Modal.User;
import com.todo.todo_server.Repository.UserRepository;

@SpringBootApplication
public class TodoServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoServerApplication.class, args);
	}
	
}
