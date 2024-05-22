package com.example.bank.controller;

import com.example.bank.dto.DepositRequest;
import com.example.bank.dto.WithdrawRequest;
import com.example.bank.entity.User;
import com.example.bank.repository.UserRepository;
import com.example.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BalanceController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/balance")
    public BigDecimal getBalance(@RequestParam String username) {
        System.out.println("Received request for balance of user: " + username);
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getBalance();
    }

    @PostMapping("/deposit")
    public User deposit(@RequestBody DepositRequest request) {
        return userService.deposit(request.getUsername(), request.getAmount());
    }

    @PostMapping("/withdraw")
    public User withdraw(@RequestBody WithdrawRequest request) {
        return userService.withdraw(request.getUsername(), request.getAmount());
    }
}
