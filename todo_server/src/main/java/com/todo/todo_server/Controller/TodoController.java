package com.todo.todo_server.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo_server.Modal.Task;
import com.todo.todo_server.Service.TodoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/todo")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
	@PostMapping("/add")
	public List<Task> addTask(@RequestBody Task task) {
		return todoService.saveTask(task);
	}
	
	@GetMapping("/list")
	public List<Task> listAllTaks(){
		return todoService.getAllTasks();
	}
	
	@DeleteMapping("/delete/{taskId}")
	public List<Task> deleteTask(@PathVariable Long taskId) {
		return todoService.deleteTaskById(taskId);
	}
	
	@PatchMapping("/update/{taskId}")
	public List<Task> updateTask(@RequestBody Task task, @PathVariable Long taskId) {
		task.setId(taskId);
		return todoService.updateTask(task);
	}
;
}
