import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className="product">
        <div className="product__info">
          <p>The lean startup</p>
          <p className="product__price">
            <small>$</small>
            <strong>19.99</strong>
          </p>
          <div className="product__rating">
            <p>⭐</p>
          </div>
          
          <img src="https://images-na.ssl-images-amazon.com/images/I/5IZymoq7UnL._AC_5Y400_.jpg" alt="Product"/>

          <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product
