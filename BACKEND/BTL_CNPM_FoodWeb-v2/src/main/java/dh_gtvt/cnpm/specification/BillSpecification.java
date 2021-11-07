package dh_gtvt.cnpm.specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import dh_gtvt.cnpm.entity.Bill;

public class BillSpecification implements Specification<Bill> {

	private static final long serialVersionUID = 1L;

	private short value;
	private String operator;
	private String field;

	public BillSpecification(String field, String operator, short value) {
		super();
		this.value = value;
		this.operator = operator;
		this.field = field;
	}

	@Override
	public Predicate toPredicate(Root<Bill> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
		// for searching
		if (operator.equals("=")) {
			return criteriaBuilder.equal(root.get(field), value);
		}
		return null;
	}

}
