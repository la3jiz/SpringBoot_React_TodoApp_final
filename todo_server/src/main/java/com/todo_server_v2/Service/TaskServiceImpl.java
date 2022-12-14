package com.todo_server_v2.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.todo_server_v2.Entity.Task;
import com.todo_server_v2.Repository.TaskRepository;
import com.todo_server_v2.Service.TaskService; 


@Service
public class TaskServiceImpl implements TaskService{
	@Autowired
	private TaskRepository taskRepository;
	
	@Override
	public List<Task> saveTask(Task task) {
		taskRepository.save(task);
		List<Task> returnValue=getAllTasksByUserId(task.getUid());
		return returnValue;
	}
	
	public List<Task> getAllTasksByUserId(String userId) {
		List<Task> allTasks=taskRepository.findAll();
		List<Task> returnValue=new ArrayList<>();
		for(Task t:allTasks) {
			if(t.getUid().equals(userId)) {
				returnValue.add(t);
			}
		}
		return returnValue;
	}

	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}
	

	@Override
	public List<Task> deleteTaskById(Long id) {
		Task deletedItem=taskRepository.getById(id);
		taskRepository.deleteById(id);
		List<Task> returnValue=getAllTasksByUserId(deletedItem.getUid());
		return returnValue;
	}
	
	public List<Task> deleteAllTasks(String userId){
		List<Task> allTasksByUserId=getAllTasksByUserId(userId);
		for(Task task:allTasksByUserId) {
			taskRepository.deleteById(task.getId());
		}
		return new ArrayList<Task>();
	}

	public List<Task>  updateTask(Task task) {
		taskRepository.save(task);
		List<Task> returnValue=getAllTasksByUserId(task.getUid());
		return returnValue;
	
	}

	@Override
	public Task findByUserId(String uid) {
		Task userTasks=taskRepository.findByUid(uid);	
		if(userTasks==null)throw new UsernameNotFoundException(uid);	
		System.out.print(userTasks);
		return userTasks;
	}

	
	

}