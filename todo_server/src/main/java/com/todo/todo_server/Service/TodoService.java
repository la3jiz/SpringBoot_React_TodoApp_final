package com.todo.todo_server.Service;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.todo.todo_server.Modal.Task;



public interface TodoService {
	
	/*@Query("select t from Task t where t.id = %:id")
	List<Task> getAllTasksOfUser (@Param("id") Long id);
*/
	
	public List<Task> saveTask(Task task);
	public List<Task> getAllTasks();
	List<Task> deleteTaskById(Long id);
	//public Task updateTask(Task task);
	public List<Task> updateTask(Task task);

}
