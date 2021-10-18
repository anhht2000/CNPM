package dh_gtvt.cnpm.specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import dh_gtvt.cnpm.entity.Food;
import dh_gtvt.cnpm.entity.FoodCategory;

public class FoodSpecification implements Specification<Food> {

	private static final long serialVersionUID = 1L;

	private Object value;
	private String operator;
	private String field;

	public FoodSpecification(String field, String operator, Object value) {
		super();
		this.value = value;
		this.operator = operator;
		this.field = field;
	}

	@Override
	public Predicate toPredicate(Root<Food> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
		// for searching
		if (operator.equals("LIKE")) {
			return criteriaBuilder.like(root.get(field), "%" + value.toString() + "%");
		}
		// for filter by food category
		if (operator.equals("=")) {
			Join<Food, FoodCategory> join = root.join(field, JoinType.LEFT);
			query.groupBy(root.get("foodId"));
			return criteriaBuilder.equal(join.get("categoryName"), value.toString());
		}

		return null;
	}

}
