package com.icinbank.dao;

import org.springframework.data.repository.CrudRepository;

import com.icinbank.model.Account;

public interface AccountRepository extends CrudRepository<Account, Integer> {

	public Account findByUsername(String username);

	public Account findByAccno(long accno);
}
