package dh_gtvt.cnpm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dh_gtvt.cnpm.entity.ActiveToken;
import dh_gtvt.cnpm.entity.User;

public interface IActiveTokenRepository extends JpaRepository<ActiveToken, Short>{

	boolean existsByToken(String token);
	
	boolean existsByUser(User user);
	
	void deleteByToken(String token);
	
	ActiveToken findByUser(User user);
	
	ActiveToken findByToken(String token);
}
