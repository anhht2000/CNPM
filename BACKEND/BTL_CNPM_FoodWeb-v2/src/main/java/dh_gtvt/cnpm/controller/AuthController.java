package dh_gtvt.cnpm.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dh_gtvt.cnpm.dto.UserBodyDTO;
import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.service.IUserService;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin("*")

public class AuthController {

	@Autowired
	private IUserService service;
	
	@GetMapping("/login")
	public ResponseEntity<?> login(Principal principal){
		String email = principal.getName();
		//get info
		User user= service.getUserByEmail(email);
		
		UserBodyDTO dto =new UserBodyDTO(user.getId(), email, user.getPhone(), user.getFirstName(), user.getLastName());
		
		return new ResponseEntity<>(dto, HttpStatus.OK);
	}
}
