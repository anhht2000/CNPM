package dh_gtvt.cnpm.dto;

public class FoodCategoryDTO {
	
	private String categoryName;

	public FoodCategoryDTO(String categoryName) {
		super();
		this.categoryName = categoryName;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

}
