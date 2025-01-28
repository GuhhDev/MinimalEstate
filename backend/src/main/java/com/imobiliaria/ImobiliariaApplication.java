package com.imobiliaria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@ComponentScan(basePackages = "com.imobiliaria")
@EnableWebMvc
public class ImobiliariaApplication {
    public static void main(String[] args) {
        SpringApplication.run(ImobiliariaApplication.class, args);
    }
}