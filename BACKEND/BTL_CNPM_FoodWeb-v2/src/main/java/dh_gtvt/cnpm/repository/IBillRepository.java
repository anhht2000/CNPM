package dh_gtvt.cnpm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.User;

public interface IBillRepository extends JpaRepository<Bill, Long>, JpaSpecificationExecutor<Bill> {

	Bill findByUser(User user);
}
