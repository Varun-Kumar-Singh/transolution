import React from "react";
import "./Checkout.css";
import CheckoutOrder from "./CheckoutOrder";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ order, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout_title">Your Consignment For Shipments</h2>

        <div className="checkout_leftOrder">
          {order.map((item) => (
            <div className="checkout_order">
              <h2>{item.orderType}</h2>
              <h3>
                Shipping Name: <p>{item.cName}</p>{" "}
              </h3>
              <h3>
                Shipping source address:{" "}
                <p>
                  {item.sourceAdd}, {item.sourcePin}
                </p>{" "}
                <p></p>
              </h3>
              <h3>
                Shipping destination address:{" "}
                <p>
                  {item.destinationAdd}, {item.destinationPin}
                </p>
                <p></p>
              </h3>
              <h3>
                Contact Detail: <p>{item.mobileNo}</p>
              </h3>
              {/* <button  className='checkout_button'>Remove From Order</button> */}
              <CheckoutOrder
                orderType={item.orderType}
                cName={item.cName}
                mobileNo={item.mobileNo}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
