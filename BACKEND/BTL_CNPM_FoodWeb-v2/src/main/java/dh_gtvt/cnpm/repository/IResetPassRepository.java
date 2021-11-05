package dh_gtvt.cnpm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.entity.resetPassToken;

public interface IResetPassRepository extends JpaRepository<resetPassToken, Short>{

	boolean existsByToken(String token);
	
	boolean existsByUser(User user);
	
	resetPassToken findByUser(User user);
}
