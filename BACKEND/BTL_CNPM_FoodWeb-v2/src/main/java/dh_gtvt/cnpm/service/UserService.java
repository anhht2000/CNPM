package dh_gtvt.cnpm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.repository.IUserRepository;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUserRepository userRepository;

	@Override
	public User getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public boolean isUserExistsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// Check user exists by username
		User user = userRepository.findByEmail(email);

		if (user == null) {
			throw new UsernameNotFoundException(email);
		}

		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassWord(), // $2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi
				AuthorityUtils.createAuthorityList(user.getRole().toString()));
	}

	@Override
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

}
