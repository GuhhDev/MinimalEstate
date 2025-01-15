package com.imobiliaria.controller;

import com.imobiliaria.model.User;
import com.imobiliaria.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/public/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Service is up!");
    }

    @GetMapping("/user/profile")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<User> getUserProfile() {
        // This will sync the user data from Keycloak to our database
        User user = userService.syncUser();
        return ResponseEntity.ok(user);
    }

    @GetMapping("/admin/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> adminOnly() {
        return ResponseEntity.ok("Hello Admin!");
    }
}
