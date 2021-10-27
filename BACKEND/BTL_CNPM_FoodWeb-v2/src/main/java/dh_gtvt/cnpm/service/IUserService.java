package dh_gtvt.cnpm.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import dh_gtvt.cnpm.entity.User;

public interface IUserService extends UserDetailsService{

	public List<User> getAllUser();
	
	public User getUserByEmail(String email);

	public boolean isUserExistsByEmail(String email);
}
