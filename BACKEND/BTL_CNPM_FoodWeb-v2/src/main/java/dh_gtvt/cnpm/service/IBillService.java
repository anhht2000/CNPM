package dh_gtvt.cnpm.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.User;

public interface IBillService {

	void updateTotalPrice(Bill bill, double total);

	Bill getBillById(long id);

	Page<Bill> getAllBillByUser(Pageable pageable, short userId);

	long createBill(User user);

}
