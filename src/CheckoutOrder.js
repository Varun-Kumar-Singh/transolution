import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutOrder({ orderType, cName, mobileNo }) {
  const [{ order, user }, dispatch] = useStateValue();

  const removeOrder = () => {
    dispatch({
      type: "REMOVE_ORDER",
      orderType: orderType,
      cName: cName,
      mobileNo: mobileNo,
    });
  };
  return (
    <div>
      <button className="checkout_button" onClick={removeOrder}>
        Remove From Order
      </button>
    </div>
  );
}

export default CheckoutOrder;

// import React from 'react'
// import { useStateValue } from './StateProvider'

// function CheckoutOrder(orderTyp, cName, sourceAdd, sourcePin, destinationAdd, destinationPin, mobileNo) {
//     const [{order, user}, dispatch] = useStateValue();
//     // const removeFromOrder = () =>{
//     //     // dispatch({
//     //     //   type: "REMOVE_FROM_ORDER",
//     //     //   orderType: orderTyp,
//     //     //   cName: cName,
//     //     //   sourceAdd: sourceAdd,
//     //     //   sourcePin: sourcePin,
//     //     //   destinationAdd: destinationAdd,
//     //     //   destinationPin: destinationPin,
//     //     //   mobileNo: mobileNo
//     //     // })
//     //   }
//     return (
//         <div className='checkout_order'>
//               <h2>{orderTyp}</h2>
//               <h3>Shipping Name: <p>{cName}</p> </h3>
//               <h3>Shipping sourceAdd: <p>{sourceAdd}, {sourcePin}</p> </h3>
//               <h3>Shipping Name: <p>{destinationAdd}</p>, <p>{destinationPin}</p></h3>
//               <h3>Contact Detail: <p>{mobileNo}</p></h3>
//               <button  className='checkout_button'>Remove From Order</button>

//         </div>

//   )
// }

// export default CheckoutOrder

// import React from 'react'
// import './Checkout.css'
// import CheckoutOrder from './CheckoutOrder';
// import { useStateValue } from './StateProvider'

// function Checkout() {
//   const [{order, user}] = useStateValue();

//   return (
//     <div className='checkout'>
//         <div className='checkout_left'>
//             <h3>Hello, {user?.email}</h3>
//             <h2 className='checkout_title'>Your Consignment For Shipments</h2>

//           <div className='checkout_leftOrder'>
//             {order.map( item =>(
//               <CheckoutOrder
//                   orderTyp= {item.orderType}
//                   cName= {item.cName}
//                   sourceAdd= {item.sourceAdd}
//                   sourcePin= {item.sourcePin}
//                   destinationAdd= {item.destinationAdd}
//                   destinationPin= {item.destinationPin}
//                   mobileNo= {item.mobileNo}
//               />

//              ))}
//             </div>
//         </div>
//         <div className='checkout_right'>
//             <h2>your subtotal will be here</h2>
//         </div>

//     </div>
//   )
// }

// export default Checkout
