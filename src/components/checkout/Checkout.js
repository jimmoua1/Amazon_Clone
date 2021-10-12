import React from "react";
import Subtotal from './Subtotal'
import { useStateValue } from '../../state/StateProvider'


function Checkout() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.imgur.com/GQcdD0D.jpg"
          alt="Ad"
        />

        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
