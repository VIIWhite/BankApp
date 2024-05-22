package com.example.bank.dto;

import java.math.BigDecimal;

public class WithdrawRequest {
    private String username;
    private BigDecimal amount;

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}
