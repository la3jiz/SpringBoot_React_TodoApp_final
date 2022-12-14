package com.todo_server_v2.Controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todo_server_v2.Entity.Task;
import com.todo_server_v2.Service.TaskService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RequestMapping("/api")
public class TaskController {
	@Autowired
	private TaskService taskService;
	
	
	@PostMapping("/add")
	public List<Task> addTask(@RequestBody Task task) {
		return taskService.saveTask(task);
	}
	
	@GetMapping("/listAll")
	public List<Task> listAllTasks(){
		return taskService.getAllTasks();
	}
	
	
	@GetMapping("/list/{userId}")
	public List<Task> listAllTaksByUserId(@PathVariable String userId){
		List<Task> allUsersTasksList=taskService.getAllTasks();
		List<Task> tasksListByUserId=new ArrayList<Task>();
		for(Task task : allUsersTasksList) {
			if(task.getUid().equals(userId)) {
				tasksListByUserId.add(task);
			}
		}
		return tasksListByUserId;
	}
	

	
	@DeleteMapping("/all/{userId}")
	public List<Task> deleteTask(@PathVariable String userId) {
		return taskService.deleteAllTasks(userId);
	}
	
	@DeleteMapping("/{taskId}")
	public List<Task> deleteTask(@PathVariable Long taskId) {
		return taskService.deleteTaskById(taskId);
	}
	
	@PutMapping("/{taskId}")
	public List<Task> updateTask(@RequestBody Task task, @PathVariable Long taskId) {
		task.setId(taskId);
		return taskService.updateTask(task);
	}

}
