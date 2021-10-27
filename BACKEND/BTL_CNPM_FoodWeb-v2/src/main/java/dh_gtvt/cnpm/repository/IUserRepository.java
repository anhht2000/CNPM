package dh_gtvt.cnpm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dh_gtvt.cnpm.entity.User;

public interface IUserRepository extends JpaRepository<User, Short>{
	
	public User findByEmail(String email);
	
	public boolean existsByEmail(String email);
}
