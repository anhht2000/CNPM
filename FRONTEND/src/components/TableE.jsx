import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionSetCurrentReceipt } from "../redux/slice/home";

export const TableE = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClickView = (data) => {
    dispatch(actionSetCurrentReceipt(data));
    history.push("/detail-receipt");
  };
  return (
    <div className='ps-section__right'>
      <div className='ps-section__header'>
        <h2>Lịch sử đơn hàng</h2>
      </div>
      <div className='ps-section__content'>
        <div className='table-responsive'>
          <table className='table ps-table--wishlist'>
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Ngày tạo</th>
                <th>Tổng tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <tr key={item.billID}>
                      <td>#{item.billID}</td>
                      <td>{moment(item.createdDate).format("DD-MM-YYYY hh:mm:ss")}</td>
                      <td>
                        {item.total?.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                      </td>
                      <td>
                        <span
                          className='ps-btn ps-btn--sm ps-btn--small'
                          onClick={() => {
                            handleClickView(item);
                          }}
                        >
                          Xem
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className='ps-pagination'></div>
      </div>
    </div>
  );
};
