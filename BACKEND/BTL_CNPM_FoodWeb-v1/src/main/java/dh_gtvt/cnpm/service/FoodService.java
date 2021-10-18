package dh_gtvt.cnpm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dh_gtvt.cnpm.dto.filters.FoodFilter;
import dh_gtvt.cnpm.entity.Food;
import dh_gtvt.cnpm.repository.IFoodCategoryRepository;
import dh_gtvt.cnpm.repository.IFoodRepository;
import dh_gtvt.cnpm.specification.FoodSpecification;

@Service
@Transactional
public class FoodService implements IFoodService {

	@Autowired
	private IFoodRepository foodRepository;

//	@Autowired
//	private IFoodCategoryRepository categoryRepository;

	public Page<Food> getAllFoods(Pageable pageable, String search, FoodFilter filter) {
		Specification<Food> where = null;

		if (search != null && !search.isEmpty()) {
			where = new FoodSpecification("foodName", "LIKE", search);
		}

		if (filter != null && filter.getCategory() != null) {
			FoodSpecification foodSpecification = new FoodSpecification("foodCategory", "=", filter.getCategory());
			if (where == null) {
				where = foodSpecification;
			} else {
				where = where.and(foodSpecification);
			}
		}

		return foodRepository.findAll(where, pageable);
	}
}
