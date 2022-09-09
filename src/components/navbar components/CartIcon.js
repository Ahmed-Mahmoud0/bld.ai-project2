import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartIcon = () => {
  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
};
