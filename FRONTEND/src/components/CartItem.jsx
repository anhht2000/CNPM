import React, { useState } from "react";
import { Button } from "reactstrap";

export default function CartItem({ food, index, handleSetListFood, handleDeleteFood }) {
  const [quantity, setQuantity] = useState(food?.quantity);
  const handleChange = ({ target }) => {
    if (Number(target.value) >= 0 && Number(target.value) <= food?.food?.foodAmount) {
      setQuantity(target.value);
      handleSetListFood(index, target.value);
    }
  };
  return (
    <tr>
      <th scope='row'>
        <img src={food?.food?.image} alt='' id='image-cart' />
      </th>
      <td>
        <h5>{food?.food?.foodName.toUpperCase()}</h5>
      </td>
      <td>
        {food?.food?.price?.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </td>
      <td>
        <input type='number' value={quantity} onChange={handleChange} style={{ width: "50px" }} />
      </td>
      <td>
        {(food?.food?.price * quantity).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </td>
      <td>
        <Button size='sm' color='danger' outline onClick={() => handleDeleteFood(food?.food?.foodName)}>
          Xóa
        </Button>
      </td>
    </tr>
  );
}
