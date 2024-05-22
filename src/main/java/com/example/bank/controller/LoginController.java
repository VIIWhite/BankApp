package com.example.bank.controller;

import com.example.bank.entity.LoginRequest;
import com.example.bank.entity.User;
import com.example.bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

/*Login Controller will use LoginRequest instead of User as the entity to login
* because User requires all attributes to be NOT NULL */

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public User loginUser(@Valid @RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
