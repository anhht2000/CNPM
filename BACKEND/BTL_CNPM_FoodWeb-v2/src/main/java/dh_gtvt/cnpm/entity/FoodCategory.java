package dh_gtvt.cnpm.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "FoodCategory", catalog = "Restaurant")
public class FoodCategory implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Column(name = "CategoryID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private short categoryId;
	
	@Column(name = "CategoryName", length = 30, nullable = false)
	private String categoryName;
	
	@OneToMany(mappedBy = "foodCategory")
	private List<Food> foods;

	public FoodCategory() {
		super();
	}

	public short getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(short categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<Food> getFoods() {
		return foods;
	}

	public void setFoods(List<Food> foods) {
		this.foods = foods;
	}

}
