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
          <Product
            id="4521341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://i.imgur.com/LQZEI9v.jpg"
            rating={5}
          />
          <Product
            id="4965894"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://i.imgur.com/rB21FQ0.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903220"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, One Size (S & L Bands Included) (Black)"
            price={199.99}
            rating={3}
            image="https://i.imgur.com/ncLBzLR.jpg"
          />
          <Product
            id="2545930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://i.imgur.com/9LuQZim.jpg"
          />
          <Product
            id="3254354"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://i.imgur.com/dgjkiqu.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="8182932"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://i.imgur.com/VsGtuht.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
