package com.icinbank.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icinbank.model.UserHistory;

public interface UserHistoryRepository extends JpaRepository<UserHistory, Integer> {

	public List<UserHistory> findByAccount(long account);
}
