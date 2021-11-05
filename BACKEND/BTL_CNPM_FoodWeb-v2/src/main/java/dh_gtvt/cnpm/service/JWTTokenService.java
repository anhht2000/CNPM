package dh_gtvt.cnpm.service;

import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import dh_gtvt.cnpm.dto.RefreshTokenDTO;
import dh_gtvt.cnpm.dto.UserBodyDTO;
import dh_gtvt.cnpm.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTTokenService implements IJWTTokenService {

	private static final long EXPIRATION_TIME = 3600; //
	private static final String SECRET = "123456";
	private static final String PREFIX_TOKEN = "Bearer";
	private static final String AUTHORIZATION = "Authorization";
	// private static final String REFRESH_TOKEN = "Refresh Token";

	public static void addJWTTokenToHeader(HttpServletResponse response, String email, IUserService service)
			throws JsonProcessingException {

		User user = service.getUserByEmail(email);
		if (user.getStatus().getCode().equals("NotActive") || user.getStatus().getCode().equals("Block")) {
			String notification = "Tài khoản không khả dụng";
			try {
				response.setContentType("application/json;charset=UTF-8");
				response.getWriter().write(notification);
				response.getWriter().flush();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		else {
			String JWT = Jwts.builder().setSubject(email)
					.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
					.signWith(SignatureAlgorithm.HS512, SECRET).compact();
//			UUID uuid = UUID.randomUUID();

			// luu refresh token xuong database
//			CreateTokenForm form = new CreateTokenForm();
//			form.setToken(uuid.toString());
//			form.setUserName(username);
//			refreshTokenService.createRefreshToken(form);

			response.addHeader(AUTHORIZATION, PREFIX_TOKEN + " " + JWT);
			// them refresh token vao header
//			response.addHeader(REFRESH_TOKEN, uuid.toString());
			//
			response.setStatus(HttpServletResponse.SC_OK);

			// the refresh token vao ca body
			UserBodyDTO dto = new UserBodyDTO(user.getId(), user.getEmail(), user.getPhone(), user.getFirstName(),
					user.getLastName(), PREFIX_TOKEN + " " + JWT);
			ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
			String json = ow.writeValueAsString(dto);
			try {
				response.setContentType("application/json;charset=UTF-8");
				response.getWriter().write(json);
				response.getWriter().flush();
				// response.getWriter().write(account.getLastName());
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public static Authentication parseTokenToUserInformation(HttpServletRequest request, IUserService service) {
		String token = request.getHeader(AUTHORIZATION);

		if (token == null) {
			return null;
		}

		try {
			// parse the token
			String email = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(PREFIX_TOKEN, "")).getBody()
					.getSubject();
			return email != null
					? new UsernamePasswordAuthenticationToken(email, null,
							AuthorityUtils.createAuthorityList(service.getUserByEmail(email).getRole().getCode()))
					: null;

		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public boolean isValidRefreshToken(String refreshToken) {
		return false;

	}

	@Override
	public String createNewRefreshToken(User user) {
		return null;

	}

	@Override
	public RefreshTokenDTO refreshToken(String refreshToken) {
		// TODO Auto-generated method stub
		return null;
	}
}