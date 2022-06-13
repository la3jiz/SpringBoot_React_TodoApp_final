package com.todo.todo_server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo_server.Modal.User;
import com.todo.todo_server.Service.UserService;

@Component
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
@Autowired
private UserService userService; 

//@Autowired
//private BCryptPasswordEncoder pwdEncoder;

@PostMapping("/signup")
public User addUser(@RequestBody User user) {
	//String pwd=user.getPassword();
	//String encodedPwd=pwdEncoder.encode(pwd);
	//user.setPassword(encodedPwd);
	return userService.addUser(user);
}



}
