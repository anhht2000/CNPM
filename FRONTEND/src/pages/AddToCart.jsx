import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Container, Table } from "reactstrap";
import CartItem from "../components/CartItem.jsx";
import CommonLayout from "../layouts/commonLayout.jsx";
import { actionSetNumberCart } from "../redux/slice/food.js";

export default function AddToCart() {
  const [listFood, setListFood] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const foods = JSON.parse(localStorage.getItem("cart")) || [];
    setListFood(foods);
  }, []);

  const handleSetListFood = (index, quantity) => {
    const newFood = [...listFood];
    newFood[index] = { ...newFood[index], quantity };
    setListFood(newFood);
    localStorage.setItem("cart", JSON.stringify(newFood));
  };

  const handleDeleteFood = (name) => {
    const newFood = listFood?.filter((e) => e.food.foodName !== name);
    setListFood(newFood);
    localStorage.setItem("cart", JSON.stringify(newFood));
    localStorage.setItem("numberFood", JSON.stringify(newFood.length));
    dispatch(actionSetNumberCart(newFood.length));
  };

  return (
    <CommonLayout>
      <Container style={{ padding: "7rem 0 2rem 0" }}>
        <Card className='card__content'>
          <CardHeader>
            <CardTitle>
              <h3>Giỏ hàng</h3>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Table borderless>
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {listFood.length > 0 &&
                  listFood.map((e, index) => (
                    <CartItem
                      key={index}
                      food={e}
                      index={index}
                      handleSetListFood={handleSetListFood}
                      handleDeleteFood={handleDeleteFood}
                    />
                  ))}
              </tbody>
            </Table>
          </CardBody>
          <CardBody style={{ textAlign: "right" }}>
            <CardSubtitle>
              <h5>
                Tổng tiền :&nbsp;
                {listFood
                  ?.reduce((sum, item) => {
                    return sum + item?.food?.price * item?.quantity;
                  }, 0)
                  .toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
              </h5>
            </CardSubtitle>
            <CardBody>
              <Button color='primary' className='me-3'>
                Mua hàng
              </Button>
              <Button
                color='secondary'
                onClick={() => {
                  history.push("/menu");
                }}
              >
                Quay lại
              </Button>
            </CardBody>
          </CardBody>
        </Card>
      </Container>
    </CommonLayout>
  );
}
