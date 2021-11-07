package dh_gtvt.cnpm.form;

public class BillDetailFormForCreating {

	private String foodName;

	private int ammout;

	public BillDetailFormForCreating(String foodName, int ammout) {
		super();
		this.foodName = foodName;
		this.ammout = ammout;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public int getAmmout() {
		return ammout;
	}

	public void setAmmout(int ammout) {
		this.ammout = ammout;
	}

}
