package dh_gtvt.cnpm.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.form.UserFormForSignUp;

public interface IUserService extends UserDetailsService{

	public List<User> getAllUser();
	
	public User getUserByEmail(String email);

	public boolean isUserExistsByEmail(String email);
	
	public boolean isUserExistsByPhone(String phone);
	
	public void createUser(UserFormForSignUp form);
	
	public void resetPassword(String email);
	
	public void confirmResetPass(String token, String passWord);

	void activeUser(User user);

	User getUserByID(short id);
}
