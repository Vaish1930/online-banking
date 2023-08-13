package com.icinbank.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icinbank.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByUsername(String username);

	public User findByEmail(String email);

	public User findByPhone(long l);
}
