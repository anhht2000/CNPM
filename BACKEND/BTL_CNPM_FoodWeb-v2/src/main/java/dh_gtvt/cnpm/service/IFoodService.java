package dh_gtvt.cnpm.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import dh_gtvt.cnpm.dto.filters.FoodFilter;
import dh_gtvt.cnpm.entity.Food;

public interface IFoodService {
	public Page<Food> getAllFoods(Pageable pageable,String search,FoodFilter filter);
}
