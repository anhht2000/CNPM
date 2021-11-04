package dh_gtvt.cnpm.form;

public class BillDetailFormForCreating {

	private short foodID;

	private int ammout;

	public BillDetailFormForCreating(short foodID, int ammout) {
		super();
		this.foodID = foodID;
		this.ammout = ammout;
	}

	public short getFoodID() {
		return foodID;
	}

	public void setFoodID(short foodID) {
		this.foodID = foodID;
	}

	public int getAmmout() {
		return ammout;
	}

	public void setAmmout(int ammout) {
		this.ammout = ammout;
	}

}
