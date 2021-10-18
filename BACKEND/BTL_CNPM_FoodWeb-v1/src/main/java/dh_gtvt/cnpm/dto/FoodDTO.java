package dh_gtvt.cnpm.dto;

public class FoodDTO {
	
	private String foodName;
	
	private String foodCategory;
	
	private double price;
	
	private String image;
	
	private int foodAmount;

	public FoodDTO(String foodName, String foodCategory, double price, String image, int foodAmount) {
		super();
		this.foodName = foodName;
		this.foodCategory = foodCategory;
		this.price = price;
		this.image = image;
		this.foodAmount = foodAmount;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getFoodCategory() {
		return foodCategory;
	}

	public void setFoodCategory(String foodCategory) {
		this.foodCategory = foodCategory;
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
	
	
}
