package dh_gtvt.cnpm.login;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import dh_gtvt.cnpm.service.IUserService;
import dh_gtvt.cnpm.service.JWTTokenService;

public class JWTAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

	private IUserService service;
	//private IRefreshTokenService refreshService;

	public JWTAuthenticationFilter(String url, AuthenticationManager authManager, IUserService service) {
		super(new AntPathRequestMatcher(url));
		setAuthenticationManager(authManager);
		this.service = service;
		//this.refreshService = refreshTokenService;
		
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {

		String email = request.getParameter("email");
		
		String passWord = request.getParameter("password");

		response.setStatus(HttpServletResponse.SC_OK);
		return getAuthenticationManager()
				.authenticate(new UsernamePasswordAuthenticationToken(
						email,
						passWord, 
						AuthorityUtils.createAuthorityList(service.getUserByEmail(email).getRole().getCode())));
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		JWTTokenService.addJWTTokenToHeader(response, authResult.getName(), service);
	}
}
