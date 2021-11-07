package dh_gtvt.cnpm.service;

import java.util.ArrayList;
import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.BillDetail;
import dh_gtvt.cnpm.entity.User;
import dh_gtvt.cnpm.repository.IBillRepository;
import dh_gtvt.cnpm.repository.IUserRepository;

@Service
@Transactional
public class BillService implements IBillService{

	@Autowired
	private IBillRepository billRepository;
	
	@Autowired
	private IUserRepository userRepository;
	
	@Override
	public void createBill(short userID) {
		User user = userRepository.findById(userID).get();
		Bill bill = new Bill();
		bill.setUser(user);
		bill.setTotalPrice(0);
		//bill.setBillDetails(new ArrayList<BillDetail>());
		billRepository.save(bill);
	}
	
	@Override
	public void updateTotalPrice(Bill bill, double total) {
		bill.setTotalPrice(total);
		billRepository.save(bill);
	}

	@Override
	public Bill getBillByUser(User user) {
		return billRepository.findByUser(user);
	}
}
