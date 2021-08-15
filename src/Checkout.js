import React from "react";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
          alt=""
        />
        <div>
          <h3> Hello,{user?.email}</h3>
          <h2 className="checkout__title">your shopping basket</h2>
          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className=" checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
