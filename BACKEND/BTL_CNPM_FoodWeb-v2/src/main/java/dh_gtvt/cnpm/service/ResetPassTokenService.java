package dh_gtvt.cnpm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.entity.resetPassToken;
import dh_gtvt.cnpm.repository.IResetPassRepository;

@Service
public class ResetPassTokenService implements IResetPassTokenService{

	@Autowired
	private IResetPassRepository repository;
	
	@Override
	public resetPassToken getResetTokenByUser(User user) {
		// TODO Auto-generated method stub
		return repository.findByUser(user);
	}

}
