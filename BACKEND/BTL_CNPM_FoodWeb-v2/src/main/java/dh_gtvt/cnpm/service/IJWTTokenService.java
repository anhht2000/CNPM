package dh_gtvt.cnpm.service;

import dh_gtvt.cnpm.dto.RefreshTokenDTO;
import dh_gtvt.cnpm.entity.User;

public interface IJWTTokenService {

	boolean isValidRefreshToken(String refreshToken);

	String createNewRefreshToken(User user);

	RefreshTokenDTO refreshToken(String refreshToken);

}
