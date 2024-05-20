// src/main/java/com/example/bank/controller/AccountController.java
package com.example.bank.controller;

import com.example.bank.entity.Account;
import com.example.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/register")
    public Account register(@RequestParam String username, @RequestParam String password, @RequestParam double initialBalance) {
        return accountService.register(username, password, initialBalance);
    }

    @PostMapping("/login")
    public Account login(@RequestParam String username, @RequestParam String password) {
        return accountService.login(username, password);
    }

    @PostMapping("/deposit")
    public double deposit(@RequestParam String username, @RequestParam double amount) {
        return accountService.deposit(username, amount);
    }

    @PostMapping("/withdraw")
    public double withdraw(@RequestParam String username, @RequestParam double amount) {
        return accountService.withdraw(username, amount);
    }

    @GetMapping("/balance")
    public double checkBalance(@RequestParam String username) {
        return accountService.checkBalance(username);
    }
}
