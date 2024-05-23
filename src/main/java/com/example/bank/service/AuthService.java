package com.example.bank.service;

import com.example.bank.repository.LoginRequest;
import com.example.bank.entity.User;
import com.example.bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new DataIntegrityViolationException("Username already exists");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new DataIntegrityViolationException("Email already exists");
        }
        if (userRepository.existsByPhoneNumber(user.getPhoneNumber())) {
            throw new DataIntegrityViolationException("Phone number already exists");
        }
        user.setBalance(user.getInitialBalance()); // set initial balance
        return userRepository.save(user);
    }

    @Transactional
    public User loginUser(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new RuntimeException("Invalid username or password, user not found");
        }
    }
}
