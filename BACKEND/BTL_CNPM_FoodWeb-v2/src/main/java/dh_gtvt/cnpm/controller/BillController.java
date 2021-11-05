package dh_gtvt.cnpm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.form.BillDetailFormForCreating;
import dh_gtvt.cnpm.service.IBillDetailService;
import dh_gtvt.cnpm.service.IBillService;
import dh_gtvt.cnpm.service.IFoodService;
import dh_gtvt.cnpm.service.IUserService;

@RestController
@RequestMapping(value = "api/v1/bill")
@CrossOrigin("*")
public class BillController {

	@Autowired
	private IBillService billService;

	@Autowired
	private IBillDetailService billDetailService;

	@Autowired
	private IUserService userService;

	@Autowired
	private IFoodService foodService;

	@PostMapping("/create")
	public ResponseEntity<?> createBill(@RequestParam(value = "userID") short userID,
			@RequestBody List<BillDetailFormForCreating> forms) {
		billService.createBill(userID);
		Bill bill = billService.getBillByUser(userService.getUserByID(userID));

		double total = 0;
		for (BillDetailFormForCreating form : forms) {
			billDetailService.createBillDetail(bill,form);
			//tinh tong tien
			total += foodService.getFoodByID(form.getFoodID()).getPrice() * form.getAmmout();
		}
		
		//set lai total price
		billService.updateTotalPrice(bill, total);
		return new ResponseEntity<String>("Thanh toán hóa đơn thành công!", HttpStatus.CREATED);

	}
	
//	@PostMapping("/create")
//	public ResponseEntity<?> createBill(@RequestParam(value = "userID") short userID
//			) {
//		billService.createBill(userID);
//		
//		return new ResponseEntity<String>("Thanh toán hóa đơn thành công!", HttpStatus.CREATED);
//
//	}
}
