import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  function getSubtotal(basket) {
    let amount = 0;
    for (var i = 0; i < basket.length; i++) {
      amount = amount + basket[i].price;
    }
    return amount;
  }
  //   dispatch({
  //     type:"SUB_TOTAL",

  //   })
  // }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal( {basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getSubtotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>proceed to checkout</button>
    </div>
  );
}

// {`${value}`}

export default Subtotal;
