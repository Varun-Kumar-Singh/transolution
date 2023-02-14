import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
 
 const navigate = useNavigate();

 
  const [{ order }] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({order.length} orders):<p></p><strong>{value}</strong>    
                    </p>
                  
                </>
            )}
            decimalScale={2}
            value={getBasketTotal}
            displayType={"text"}
            thousandSeparator=','
            prefix={"$"}
      />

      <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
