package dh_gtvt.cnpm.service;

import dh_gtvt.cnpm.entity.User;

public interface IActiveTokenService {

	User getUserByActiveToken(String token);

	void deleteUserByActiveToken(String token);
}
