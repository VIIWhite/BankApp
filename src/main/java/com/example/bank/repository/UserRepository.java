// src/main/java/com/example/bank/repository/UserRepository.java
package com.example.bank.repository;

import com.example.bank.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
