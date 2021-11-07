import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { actionSetNumberCart } from "../redux/slice/food";
import { toast } from "react-toastify";

export default function EModal({ open, handleClose, food }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const hanldeQuantity = (number) => {
    const _number = (number < 0 && 0) || (number > food?.foodAmount && food?.foodAmount) || number;
    setQuantity(_number);
  };
  const handleClickClose = () => {
    handleClose();
    setQuantity(1);
  };
  const handleAddtoCart = (food) => {
    let isExist = false;
    let location = 0;
    let _food = [];

    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    oldCart?.map((e, index) => {
      if (e.food.foodName === food.foodName) {
        isExist = true;
        location = index;
      }
      return e;
    });
    if (isExist) {
      _food = [...oldCart];
      console.log(_food[location]);
      _food[location] = { food: { ..._food[location].food }, quantity: _food[location].quantity + quantity };
    } else {
      _food = [...oldCart, { food, quantity: quantity }];
    }
    dispatch(actionSetNumberCart(_food.length));
    localStorage.setItem("cart", JSON.stringify(_food));
    localStorage.setItem("numberFood", JSON.stringify(_food.length));
    setQuantity(1);
    handleClose();
    toast.success("Thêm giỏ hàng thành công");
  };
  return (
    <div>
      <Modal toggle={handleClickClose} isOpen={open}>
        <ModalHeader toggle={handleClickClose}>Đặt hàng</ModalHeader>
        <ModalBody>
          <div className='modal__container'>
            <img src={food?.image} alt='' />
            <div className='modal__container-right'>
              <p>{food?.foodName}</p>
              <p>Loại : {food?.foodCategory}</p>
              <p>
                Giá :&nbsp;
                {food?.price?.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p>Số lượng {`(còn ${food?.foodAmount} sản phẩm)`} :&nbsp;</p>
              <div className='buttons_added'>
                <input className='minus is-form' type='button' value='-' onClick={() => hanldeQuantity(quantity - 1)} />
                <input aria-label='quantity' className='input-qty' name='' type='number' value={quantity} />
                <input className='plus is-form' type='button' value='+' onClick={() => hanldeQuantity(quantity + 1)} />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => handleAddtoCart(food)}>
            Thêm vào giỏ
          </Button>{" "}
          <Button onClick={handleClose}>Hủy bỏ</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
