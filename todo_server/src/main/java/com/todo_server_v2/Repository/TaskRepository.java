package com.todo_server_v2.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo_server_v2.Entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
	Task findByUid(String uid);
}
