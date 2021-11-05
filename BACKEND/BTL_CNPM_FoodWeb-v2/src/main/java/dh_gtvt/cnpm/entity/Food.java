package dh_gtvt.cnpm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Food", catalog = "Restaurant")
public class Food implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name = "FoodID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private short foodId;
	
	@ManyToOne
	@JoinColumn(name = "CategoryID", nullable = false)
	private FoodCategory foodCategory;
	
	@Column(name = "FoodName", length = 30, nullable = false)
	private String foodName;
	
	@Column(name = "Price", nullable = false)
	private double price;
	
	@Column(name = "image", length = 500, nullable = false)
	private String image;
	
	@Column(name = "Label", length = 25)
	private String label;
	
	@Column(name = "FoodAmount", nullable = false)
	private int foodAmount;

	public Food() {
		super();
	}

	public short getFoodId() {
		return foodId;
	}

	public void setFoodId(short foodId) {
		this.foodId = foodId;
	}

	public FoodCategory getFoodCategory() {
		return foodCategory;
	}

	public void setFoodCategory(FoodCategory foodCategory) {
		this.foodCategory = foodCategory;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getFoodAmount() {
		return foodAmount;
	}

	public void setFoodAmount(int foodAmount) {
		this.foodAmount = foodAmount;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}
	
	
}
