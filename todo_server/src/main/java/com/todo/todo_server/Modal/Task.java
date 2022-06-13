package com.todo.todo_server.Modal;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Task {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	private String title;
	private String Description;
	private Date creation_date;
	
	@ManyToOne
	private User user;
	


	public Task() {}




	public Long getId() {
		return Id;
	}




	public void setId(Long id) {
		Id = id;
	}




	public String getTitle() {
		return title;
	}




	public void setTitle(String title) {
		this.title = title;
	}




	public String getDescription() {
		return Description;
	}




	public void setDescription(String description) {
		Description = description;
	}




	public Date getCreation_date() {
		return creation_date;
	}




	public void setCreation_date(Date creation_date) {
		this.creation_date = creation_date;
	}








	
	
}
