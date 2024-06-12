package com.example.bank.service;

import com.example.bank.repository.LoginRequest;
import com.example.bank.entity.User;
import com.example.bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.mindrot.jbcrypt.BCrypt;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private static final Pattern PASSWORD_PATTERN = Pattern.compile("[_\\-\\.0-9a-z]{1,127}");

    @Transactional
    public User registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new DataIntegrityViolationException("Username already exists");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new DataIntegrityViolationException("Email already exists");
        }
        if (userRepository.existsByPhoneNumber(user.getPhoneNumber())) {
            throw new DataIntegrityViolationException("Phone number already exists");
        }

        // Validate password format
        if (!PASSWORD_PATTERN.matcher(user.getPassword()).matches()) {
            throw new IllegalArgumentException("Password must contain only underscores, hyphens, dots, digits, and lowercase letters, and be between 1 and 127 characters long.");
        }

        // Encrypt the password before saving the user
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        user.setBalance(user.getInitialBalance()); // set initial balance
        return userRepository.save(user);
    }

    @Transactional
    public User loginUser(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())) {
                return user;
            } else {
                throw new RuntimeException("Invalid username or password, user not found");
            }
        } else {
            throw new RuntimeException("Invalid username or password, user not found");
        }
    }
}
