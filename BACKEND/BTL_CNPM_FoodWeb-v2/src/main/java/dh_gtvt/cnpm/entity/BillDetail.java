package dh_gtvt.cnpm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "BillDetail", catalog = "Restaurant")
public class BillDetail implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private BillDetailPK id;

	@ManyToOne
	@MapsId("BillID")
	@JoinColumn(name = "BillID")
	private Bill bill;

	@ManyToOne
	@MapsId("FoodID")
	@JoinColumn(name = "FoodID")
	private Food food;

	@Column(name = "Ammount", columnDefinition = "int default 1")
	private int ammount;

	public BillDetail() {
		super();
	}

	public BillDetail(Bill bill, Food food) {
		super();
		this.id = new BillDetailPK();
		id.setBillID(bill.getId());
		id.setFoodID(food.getFoodId());
		this.bill = bill;
		this.food = food;
	}

	public BillDetailPK getId() {
		return id;
	}

	public void setId(BillDetailPK id) {
		this.id = id;
	}

	public Bill getBill() {
		return bill;
	}

	public void setBill(Bill bill) {
		this.bill = bill;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public int getAmmount() {
		return ammount;
	}

	public void setAmmount(int ammount) {
		this.ammount = ammount;
	}

}
