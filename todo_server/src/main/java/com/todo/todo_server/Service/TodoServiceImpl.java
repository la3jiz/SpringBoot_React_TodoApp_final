package com.todo.todo_server.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.todo_server.Modal.Task;
import com.todo.todo_server.Repository.TodoRepository;
import com.todo.todo_server.Service.TodoService; 


@Service
public class TodoServiceImpl implements TodoService{
	@Autowired
	private TodoRepository todoRepository;
	
	@Override
	public List<Task> saveTask(Task task) {
		todoRepository.save(task);
		return todoRepository.findAll();
	}

	public List<Task> getAllTasks() {
		return todoRepository.findAll();
	}
	

	@Override
	public List<Task> deleteTaskById(Long id) {
		todoRepository.deleteById(id);
		return todoRepository.findAll();
	}

	public List<Task>  updateTask(Task task) {
		
		todoRepository.save(task);
		return todoRepository.findAll();
	}

	
	

}