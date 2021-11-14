package dh_gtvt.cnpm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.repository.IActiveTokenRepository;
import dh_gtvt.cnpm.repository.IResetPassRepository;
import dh_gtvt.cnpm.repository.IUserRepository;

@Component
public class EmailService implements IEmailService {

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private IUserRepository userRepository;

	@Autowired
	private IResetPassRepository resetPassRepository;
	
	@Autowired
	private IActiveTokenRepository activeRepository;

	@Override
	public void sendRegistrationUserConfirm(String email) {
		User user = userRepository.findByEmail(email);
		String token = resetPassRepository.findByUser(user).getToken();

		String resetUrl = "http://localhost:8083/change-password/" + token;

		String subject = "Xác nhận thay đổi mật khẩu";
		String content = "Click vào link dưới để thay đổi mật khẩu \n" + resetUrl;

		sendMail(email, subject, content);

	}
	
	@Override
	public void sendRegistrationActive(String email) {
		User user = userRepository.findByEmail(email);
		String token = activeRepository.findByUser(user).getToken();

		String resetUrl = "http://localhost:8081/api/v1/user/activeUser?token=" + token;

		String subject = "Xác thực tài khoản";
		String content = "Click vào link dưới để xác thực \n" + resetUrl;

		sendMail(email, subject, content);

	}

	private void sendMail(final String recipientEmail, final String subject, final String content) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(recipientEmail);
		message.setSubject(subject);
		message.setText(content);

		mailSender.send(message);
	}
}
