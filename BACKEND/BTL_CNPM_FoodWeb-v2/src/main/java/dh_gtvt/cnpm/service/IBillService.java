package dh_gtvt.cnpm.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.User;

public interface IBillService {

	public long createBill(short userID);

	void updateTotalPrice(Bill bill, double total);

	Bill getBillById(long id);

	Page<Bill> getAllBillByUser(Pageable pageable, short userId);

}
