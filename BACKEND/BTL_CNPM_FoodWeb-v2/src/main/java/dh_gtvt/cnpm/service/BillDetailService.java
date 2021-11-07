package dh_gtvt.cnpm.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.BillDetail;
import dh_gtvt.cnpm.entity.BillDetailPK;
import dh_gtvt.cnpm.form.BillDetailFormForCreating;
import dh_gtvt.cnpm.repository.IBillDetailRepository;
import dh_gtvt.cnpm.repository.IFoodRepository;

@Service
@Transactional
public class BillDetailService implements IBillDetailService {

	@Autowired
	private IFoodRepository foodRepository;

	@Autowired
	private IBillDetailRepository billDetailRepository;

	@Override
	public void createBillDetail(Bill bill, BillDetailFormForCreating form) {
		BillDetail billDetail = new BillDetail(new BillDetailPK(bill.getId(),foodRepository.findByFoodName(form.getFoodName()).getFoodId()),form.getAmmout());
//		billDetail.setBill(bill);
//		billDetail.setFood(foodRepository.findById(form.getFoodID()).get());
		billDetailRepository.save(billDetail);
	}

}
