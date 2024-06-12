package com.example.bank.entity;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.math.BigDecimal;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Pattern(regexp = "[_\\-\\.0-9a-z]{1,127}", message = "Username must contain only underscores, hyphens, dots, digits, and lowercase letters, and be between 1 and 127 characters long.")
    @NotNull
    @Column(unique = true)
    private String username;

    @NotNull
    private String fullName;

//    @Pattern(regexp = "[_\\-\\.0-9a-z]{1,127}", message = "Password must contain only underscores, hyphens, dots, digits, and lowercase letters, and be between 1 and 127 characters long.")
// Validation of password is moved to the service layer

    @NotNull
    private String password;

    @DecimalMin(value = "0.00", inclusive = true, message = "Initial balance must be non-negative.")
    @Digits(integer = 10, fraction = 2, message = "Initial balance format is invalid.")
    @NotNull
    private BigDecimal initialBalance;

    @Email(message = "Email should be valid.")
    @NotNull
    private String email;

    @Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{10}$", message = "Phone number should be valid.")
    @NotNull
    private String phoneNumber;

    @Pattern(regexp = "(0|[1-9][0-9]*)", message = "Age must be a valid number.")
    private String age;

    private String gender;

    private BigDecimal balance;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public BigDecimal getInitialBalance() {
        return initialBalance;
    }

    public void setInitialBalance(BigDecimal initialBalance) {
        this.initialBalance = initialBalance;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }
}
