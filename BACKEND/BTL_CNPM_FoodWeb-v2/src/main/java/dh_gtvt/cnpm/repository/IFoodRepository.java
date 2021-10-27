package dh_gtvt.cnpm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import dh_gtvt.cnpm.entity.Food;

public interface IFoodRepository extends JpaRepository<Food, Short>, JpaSpecificationExecutor<Food> {

}
