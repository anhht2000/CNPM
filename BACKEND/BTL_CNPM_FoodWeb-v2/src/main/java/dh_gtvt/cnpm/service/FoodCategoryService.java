package dh_gtvt.cnpm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dh_gtvt.cnpm.entity.FoodCategory;
import dh_gtvt.cnpm.repository.IFoodCategoryRepository;

@Service
@Transactional
public class FoodCategoryService implements IFoodCategorySevice {

	@Autowired
	private IFoodCategoryRepository repository;

	public List<FoodCategory> getAllFoodCategory() {
		return repository.findAll();
	}

}
