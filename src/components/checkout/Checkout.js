import React from "react";

function Checkout() {
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

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
