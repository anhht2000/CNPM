package dh_gtvt.cnpm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dh_gtvt.cnpm.entity.BillDetail;
import dh_gtvt.cnpm.entity.BillDetailPK;

public interface IBillDetailRepository extends JpaRepository<BillDetail, BillDetailPK>{

}
