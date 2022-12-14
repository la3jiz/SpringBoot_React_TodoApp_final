package com.todo_server_v2.Entity;

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
	private Long id;
	private String title;
	private String description;
	private Date creation_date;
	private String uid;
	private String username;
	

	


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Task() {}

	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public String getTitle() {
		return title;
	}




	public void setTitle(String title) {
		this.title = title;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public Date getCreation_date() {
		return creation_date;
	}




	public void setCreation_date(Date creation_date) {
		this.creation_date = creation_date;
	}




	public String getUid() {
		return uid;
	}




	public void setUid(String uid) {
		this.uid = uid;
	}




	@Override
	public String toString() {
		return "TaskEntity [id=" + id + ", title=" + title + ", description=" + description + ", creation_date="
				+ creation_date + ", uid=" + uid + "]";
	}




















	
	
}
