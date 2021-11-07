package dh_gtvt.cnpm.dto;

import java.util.Date;
import java.util.List;

import dh_gtvt.cnpm.form.BillDetailFormForCreating;

public class BillDTO {

	private long billID;

	private Date createdDate;

	private List<BillDetailFormForCreating> billDetails;

	private double total;

	public BillDTO(long billID, Date createdDate, List<BillDetailFormForCreating> billDetails, double total) {
		super();
		this.billID = billID;
		this.createdDate = createdDate;
		this.billDetails = billDetails;
		this.total = total;
	}

	public BillDTO() {
		super();
	}

	public long getBillID() {
		return billID;
	}

	public void setBillID(long billID) {
		this.billID = billID;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public List<BillDetailFormForCreating> getBillDetails() {
		return billDetails;
	}

	public void setBillDetails(List<BillDetailFormForCreating> billDetails) {
		this.billDetails = billDetails;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

}
