package dh_gtvt.cnpm.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dh_gtvt.cnpm.entity.BillDetail;
import dh_gtvt.cnpm.form.BillDetailFormForCreating;
import dh_gtvt.cnpm.repository.IBillDetailRepository;
import dh_gtvt.cnpm.repository.IBillRepository;
import dh_gtvt.cnpm.repository.IFoodRepository;

@Service
@Transactional
public class BillDetailService implements IBillDetailService {

	@Autowired
	private IBillRepository billRepository;

	@Autowired
	private IFoodRepository foodRepository;

	@Autowired
	private IBillDetailRepository billDetailRepository;

	@Override
	public void createBillDetail(long billID,BillDetailFormForCreating form) {
		BillDetail billDetail = new BillDetail();
		billDetail.setBill(billRepository.findById(billID).get());
		billDetail.setFood(foodRepository.findById(form.getFoodID()).get());
		billDetail.setAmmount(form.getAmmout());
		billDetailRepository.save(billDetail);
	}

}
