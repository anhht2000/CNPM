package dh_gtvt.cnpm.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.repository.IBillRepository;
import dh_gtvt.cnpm.specification.BillSpecification;

@Service
@Transactional
public class BillService implements IBillService{

	@Autowired
	private IBillRepository billRepository;
	
	@Override
	public long createBill(User user) {
		Bill bill = new Bill();
		bill.setUser(user);
		bill.setBillDetails(null);
		bill.setTotalPrice(0);
		billRepository.save(bill);
		billRepository.flush();
		return bill.getId();
	}
	
	@Override
	public void updateTotalPrice(Bill bill, double total) {
		bill.setTotalPrice(total);
		billRepository.save(bill);
	}

	@Override
	public Page<Bill> getAllBillByUser(Pageable pageable, short userId) {
		Specification<Bill> where = null;

		if (userId != 0) {
			where = new BillSpecification("user", "=", userId);
		}
		
		return billRepository.findAll(where, pageable);
	}
	
	@Override
	public Bill getBillById(long id) {
		return billRepository.findById(id).get();
	}

}
