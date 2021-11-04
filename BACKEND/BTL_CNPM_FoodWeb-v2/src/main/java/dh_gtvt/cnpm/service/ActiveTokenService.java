package dh_gtvt.cnpm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.repository.IActiveTokenRepository;

@Service
public class ActiveTokenService implements IActiveTokenService{

	@Autowired
	private IActiveTokenRepository repository;
	
	@Override
	public User getUserByActiveToken(String token) {
		return repository.findByToken(token).getUser();
	}
	
	@Override
	public void deleteUserByActiveToken(String token) {
		repository.deleteByToken(token);
	}

}
