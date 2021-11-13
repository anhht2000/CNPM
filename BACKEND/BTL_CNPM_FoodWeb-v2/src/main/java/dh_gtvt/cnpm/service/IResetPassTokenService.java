package dh_gtvt.cnpm.service;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.entity.resetPassToken;

public interface IResetPassTokenService {
	
	public resetPassToken getResetTokenByUser(User user);
}
