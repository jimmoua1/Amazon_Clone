import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.imgur.com/4K3bXi0.jpg"
          alt="Home Page"
        />

        <div className="home__row">
          <Product />
          <Product />
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
