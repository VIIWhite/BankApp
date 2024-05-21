// src/main/java/com/example/bank/service/UserService.java
package com.example.bank.service;

import com.example.bank.entity.User;
import com.example.bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }
}
