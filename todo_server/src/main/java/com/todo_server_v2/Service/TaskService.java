package com.todo_server_v2.Service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.todo_server_v2.Entity.Task;

public interface TaskService {

	/*
	 * @Query("select t from Task t where t.id = %:id") List<Task> getAllTasksOfUser
	 * (@Param("id") Long id);
	 */

	public List<Task> saveTask(Task task);

	public List<Task> getAllTasks();

	List<Task> deleteTaskById(Long id);

	public List<Task> deleteAllTasks(String userId);

	public List<Task> updateTask(Task task);

	public Task findByUserId(String uid);

}
