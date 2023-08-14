package com.icinbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class IcinbankNewApplication {

	public static void main(String[] args) {
		SpringApplication.run(IcinbankNewApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedHeaders("*")
						.exposedHeaders("Access-Control-Allow-Origin").allowedMethods("HEAD", "GET", "PUT", "POST",
								"DELETE", "PATCH");
			}
		};
	}

}
