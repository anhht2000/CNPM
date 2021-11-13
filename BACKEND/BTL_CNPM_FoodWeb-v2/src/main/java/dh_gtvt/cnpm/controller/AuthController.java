package dh_gtvt.cnpm.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.entity.resetPassToken;
import dh_gtvt.cnpm.form.UserFormForSignUp;
import dh_gtvt.cnpm.service.IActiveTokenService;
import dh_gtvt.cnpm.service.IResetPassTokenService;
import dh_gtvt.cnpm.service.IUserService;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin("*")
public class AuthController {

	@Autowired
	private IUserService service;
	
	@Autowired
	private IActiveTokenService activeTokenService;
	
	@Autowired
	private IResetPassTokenService resetTokenService;
	
	private PasswordEncoder encoder;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody UserFormForSignUp form) {
		if(service.isUserExistsByEmail(form.getEmail())) {
			return new ResponseEntity<String>("Email đã được đăng ký bởi 1 tài khoản khác!",HttpStatus.BAD_REQUEST);
		}
		
		if(service.isUserExistsByPhone(form.getPhone())) {
			return new ResponseEntity<String>("Số điện thoại đã được đăng ký bởi 1 tài khoản khác!",HttpStatus.BAD_REQUEST);
		}
		
		encoder = new BCryptPasswordEncoder();
		form.setPassWord(encoder.encode(form.getPassWord()));
		
		service.createUser(form);
		return new ResponseEntity<String>("Kiểm tra email để xác thực!", HttpStatus.CREATED);
	}
	
	@GetMapping("/activeUser")
	public ResponseEntity<?> activeUser(@RequestParam(value = "token") String token){
		User user = activeTokenService.getUserByActiveToken(token);
		//check expired date
		if(user.getActiveToken().getExpiredDate().compareTo(new Date(System.currentTimeMillis()))<0) {
			return new ResponseEntity<String>("Link đã hết hạn!", HttpStatus.BAD_REQUEST);
		}
		service.activeUser(user);
		return new ResponseEntity<String>("Tài khoản đã được xác thực!", HttpStatus.OK);
	}
	
	@PostMapping("/resetPassWord")
	public ResponseEntity<?> resetPassWord(@RequestParam(value = "email") String email){
		if(!service.isUserExistsByEmail(email)) {
			return new ResponseEntity<String>("Email chưa đăng ký!", HttpStatus.BAD_REQUEST);
		}
		
		User user = service.getUserByEmail(email);
		service.resetPassword(email);
		resetPassToken token = resetTokenService.getResetTokenByUser(user);
		
		return new ResponseEntity<String>(token.getToken() , HttpStatus.OK);

	}
}
