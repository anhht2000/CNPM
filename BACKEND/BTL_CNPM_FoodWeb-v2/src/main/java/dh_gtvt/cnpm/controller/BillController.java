package dh_gtvt.cnpm.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dh_gtvt.cnpm.dto.BillDTO;
import dh_gtvt.cnpm.entity.Bill;
import dh_gtvt.cnpm.entity.BillDetail;
import dh_gtvt.cnpm.entity.User;
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
	public ResponseEntity<?> createBill(Principal principal, @RequestBody List<BillDetailFormForCreating> forms) {
		User user = userService.getUserByEmail(principal.getName());
		long id = billService.createBill(user);
		Bill bill = billService.getBillById(id);

		double total = 0;
		for (BillDetailFormForCreating form : forms) {
			billDetailService.createBillDetail(bill, form);
			// tinh tong tien
			total += foodService.getFoodByName(form.getFoodName()).getPrice() * form.getAmmout();
		}

		// set lai total price
		billService.updateTotalPrice(bill, total);
		return new ResponseEntity<String>("Thanh toán hóa đơn thành công!", HttpStatus.CREATED);

	}

	@GetMapping()
	public ResponseEntity<?> getAllBillByUser(Pageable pageable,
			Principal principal) {
		User user = userService.getUserByEmail(principal.getName());
		Page<Bill> entities = billService.getAllBillByUser(pageable, user.getId());

		Page<BillDTO> bills = entities.map(new Function<Bill, BillDTO>() {
			@Override
			public BillDTO apply(Bill bill) {
				BillDTO dto = new BillDTO();
				dto.setBillID(bill.getId());
				dto.setCreatedDate(bill.getCreatedDate());
				List<BillDetailFormForCreating> details = new ArrayList<>();
				for (BillDetail detail : bill.getBillDetails()) {
					BillDetailFormForCreating d = new BillDetailFormForCreating(detail.getFood().getFoodName(),
							detail.getAmmount());
					details.add(d);
				}
				dto.setBillDetails(details);
				dto.setTotal(bill.getTotalPrice());
				return dto;
			}
		});
		return new ResponseEntity<>(bills, HttpStatus.OK);
	}
}
