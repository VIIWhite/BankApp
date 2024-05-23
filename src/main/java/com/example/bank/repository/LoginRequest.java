package com.example.bank.repository;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

// used by LoginRequest to login

public class LoginRequest {

    @Pattern(regexp = "[_\\-\\.0-9a-z]{1,127}", message = "Username must contain only underscores, hyphens, dots, digits, and lowercase letters, and be between 1 and 127 characters long.")
    @NotNull
    private String username;

    @Pattern(regexp = "[_\\-\\.0-9a-z]{1,127}", message = "Password must contain only underscores, hyphens, dots, digits, and lowercase letters, and be between 1 and 127 characters long.")
    @NotNull
    private String password;

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
