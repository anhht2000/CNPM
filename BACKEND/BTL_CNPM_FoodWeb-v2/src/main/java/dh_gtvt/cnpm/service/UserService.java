package dh_gtvt.cnpm.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dh_gtvt.cnpm.converters.gender;
import dh_gtvt.cnpm.converters.role;
import dh_gtvt.cnpm.converters.status;
import dh_gtvt.cnpm.entity.ActiveToken;
import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.entity.resetPassToken;
import dh_gtvt.cnpm.event.OnSendResetPasswordEmail;
import dh_gtvt.cnpm.form.UserFormForSignUp;
import dh_gtvt.cnpm.repository.IActiveTokenRepository;
import dh_gtvt.cnpm.repository.IResetPassRepository;
import dh_gtvt.cnpm.repository.IUserRepository;

@Service
@Component
@Transactional
public class UserService implements IUserService {

	@Autowired
	private IUserRepository userRepository;

	@Autowired
	private IResetPassRepository resetPassRepository;

	@Autowired
	private IActiveTokenRepository activeRepository;

	@Autowired
	private ApplicationEventPublisher eventPublisher;

	@Autowired
	private IEmailService emailService;

	@Override
	public User getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	@Override
	public User getUserByID(short id) {
		return userRepository.findById(id).get();
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

	@Override
	public void createUser(UserFormForSignUp form) {
		User user = new User();
		user.setEmail(form.getEmail());
		user.setPhone(form.getPhone());
		user.setFirstName(form.getFirstName());
		user.setLastName(form.getLastName());
		user.setPassWord(form.getPassWord());
		user.setAddress(form.getAddress());
		user.setGender(gender.Unknown);
		user.setRole(role.User);
		user.setStatus(status.NotActive);
		userRepository.save(user);
		
		createActiveToken(user);
		emailService.sendRegistrationActive(user.getEmail());
	}
	
	@Override
	public void activeUser(User user) {
		user.setStatus(status.Active);
		userRepository.save(user);
		ActiveToken active = user.getActiveToken();
		activeRepository.delete(active);
	}

	@Override
	public boolean isUserExistsByPhone(String phone) {
		return userRepository.existsByPhone(phone);
	}

	private void sendConfirmUserRegistrationViaEmail(String email) {
		eventPublisher.publishEvent(new OnSendResetPasswordEmail(email));
	}

	private void createActiveToken(User user) {
		final String token = UUID.randomUUID().toString();
		ActiveToken active = new ActiveToken();
		active.setUser(user);
		active.setToken(token);
		activeRepository.save(active);
	}

	private void createResetToken(User user) {
		final String token = UUID.randomUUID().toString();
		if (resetPassRepository.existsByUser(user)) {
			resetPassToken reset = resetPassRepository.findByUser(user);
			reset.setToken(token);
			resetPassRepository.save(reset);
		} else {
			resetPassToken reset = new resetPassToken();
			reset.setToken(token);
			reset.setUser(user);
			resetPassRepository.save(reset);

		}
	}

	@Override
	public void resetPassword(String email) {
		createResetToken(userRepository.findByEmail(email));
		// sendConfirmUserRegistrationViaEmail(email);
		emailService.sendRegistrationUserConfirm(email);

	}

	@Override
	public void confirmResetPass(String token, String passWord) {
		// TODO Auto-generated method stub
		
	}
}
