package dh_gtvt.cnpm.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dh_gtvt.cnpm.dto.FoodCategoryDTO;
import dh_gtvt.cnpm.entity.FoodCategory;
import dh_gtvt.cnpm.service.IFoodCategorySevice;

@RestController
@RequestMapping(value = "api/v1/foodcategory")
@CrossOrigin("*")
public class FoodCategoryController {
	
	@Autowired
	private IFoodCategorySevice service;
	
	@GetMapping()
	public ResponseEntity<?> getAllFoodCategory(){
		
		List<FoodCategory> entities = service.getAllFoodCategory();
		List<FoodCategoryDTO> dtos = new ArrayList<>();
		
		for(FoodCategory category:entities) {
			FoodCategoryDTO dto = new FoodCategoryDTO(category.getCategoryName());
			dtos.add(dto);
		}
		
		return new ResponseEntity<>(dtos, HttpStatus.OK);
	}

}
