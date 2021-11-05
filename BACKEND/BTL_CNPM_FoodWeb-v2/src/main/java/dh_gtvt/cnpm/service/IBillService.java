package dh_gtvt.cnpm.service;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.User;

public interface IBillService {

	public void createBill(short userID);

	Bill getBillByUser(User user);

	void updateTotalPrice(Bill bill, double total);
}
