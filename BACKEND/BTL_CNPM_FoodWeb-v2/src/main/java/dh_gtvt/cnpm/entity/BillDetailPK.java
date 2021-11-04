package dh_gtvt.cnpm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BillDetailPK implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Column(name = "FoodID")
	private short foodID;
	
	@Column(name = "BillID")
	private long billID;

	public BillDetailPK() {
		super();
	}

	public short getFoodID() {
		return foodID;
	}

	public void setFoodID(short foodID) {
		this.foodID = foodID;
	}

	public long getBillID() {
		return billID;
	}

	public void setBillID(long billID) {
		this.billID = billID;
	}
	
}
