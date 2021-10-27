package dh_gtvt.cnpm.controller;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dh_gtvt.cnpm.dto.filters.FoodFilter;
import dh_gtvt.cnpm.dto.FoodDTO;
import dh_gtvt.cnpm.entity.Food;
import dh_gtvt.cnpm.service.IFoodService;

@RestController
@RequestMapping(value = "api/v1/foods")
@CrossOrigin("*")

public class FoodController {

	@Autowired
	private IFoodService service;

	@GetMapping()
	public ResponseEntity<?> getAllFoods(Pageable pageable,
			@RequestParam(value = "search", defaultValue = "") String search, FoodFilter filter) {
		Page<Food> entities = service.getAllFoods(pageable, search, filter);

		Page<FoodDTO> dtos = entities.map(new Function<Food, FoodDTO>() {
			@Override
			public FoodDTO apply(Food food) {
				FoodDTO dto = new FoodDTO(food.getFoodName(), food.getFoodCategory().getCategoryName(), food.getPrice(),
						food.getImage(), food.getFoodAmount());
				return dto;
			}
		});

//		for (Food food : entities) {
//			FoodDTO dto = new FoodDTO(food.getFoodName(), food.getFoodCategory().getCategoryName(), food.getPrice(),
//					food.getImage(), food.getFoodAmount());
//			dtos.add(dto);
//		}
		return new ResponseEntity<>(dtos, HttpStatus.OK);
	}
}
