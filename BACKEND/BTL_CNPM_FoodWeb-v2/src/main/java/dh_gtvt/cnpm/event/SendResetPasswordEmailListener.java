package dh_gtvt.cnpm.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;

import dh_gtvt.cnpm.service.IEmailService;

public class SendResetPasswordEmailListener implements ApplicationListener<OnSendResetPasswordEmail>{

	@Autowired
	private IEmailService emailService;
	
	@Override
	public void onApplicationEvent(OnSendResetPasswordEmail event) {
		SendResetPasswordEmail(event.getEmail());
		
	}

	private void SendResetPasswordEmail(String email) {
		emailService.sendRegistrationUserConfirm(email);
	}
}
