package com.iet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class DeliciousDairyApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeliciousDairyApplication.class, args);
		
		System.out.println("\t \t Hello Ravi \n \t \t \tWelcome To CDAC IET Acts");
	}
	
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

}
