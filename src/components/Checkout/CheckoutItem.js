import React from "react";
import { Button } from "react-bootstrap";

const CheckoutItem = ({ item, index, remove }) => {
  const { title, image, price } = item;
  return (
    <tr>
      <td>
        <div className="check-item-row">{index}</div>
      </td>
      <td>
        <div className="check-item-img-wrapper">
          <img src={image} className="check-item-img" />
        </div>
      </td>
      <td>
        <div className="check-item-row">{title}</div>
      </td>
      <td>
        <div className="check-item-row">${price}</div>
      </td>
      <td>
        <input
          type="text"
          className="form-control quantity-input"
          defaultValue={1}
        />
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() => {
            remove(item);
          }}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default CheckoutItem;
