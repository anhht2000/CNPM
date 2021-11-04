package dh_gtvt.cnpm.service;

import dh_gtvt.cnpm.form.BillDetailFormForCreating;

public interface IBillDetailService {
	
	public void createBillDetail(long billID,BillDetailFormForCreating form);
}
