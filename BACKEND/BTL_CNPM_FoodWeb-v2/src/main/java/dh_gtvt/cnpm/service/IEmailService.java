package dh_gtvt.cnpm.service;

public interface IEmailService {

	void sendRegistrationUserConfirm(String email);

	void sendRegistrationActive(String email);

}
