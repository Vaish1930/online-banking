package com.icinbank.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icinbank.model.Transfer;

public interface TransferHistoryRepository extends JpaRepository<Transfer, Integer> {

	public List<Transfer> findBySaccount(long saccount);

	public List<Transfer> findByRaccount(long raccount);

}
