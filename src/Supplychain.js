import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Transportation.css';

function Supplychain() {

  const navigate = useNavigate()
  const [cName, setCName] = useState('');
  const [sourceAdd, setSourceAdd] = useState('');
  const [sourcePin, setSourcePin] = useState('');
  const [destinationAdd, setDestinationAdd] = useState('');
  const [destinationPin, setDestinationPin] = useState('');
  const [mobileNo, setMobileNo] = useState('');


  const [{ order, user }, dispatch] = useStateValue();


  const addToOrderTranspotation = e => {e.preventDefault()
    // sends action report to the data link layer 
    dispatch({
      type: "ORDER_TRANSPOTATION",
      item: {
        orderType: 'Supplychain',
        cName: cName,
        sourceAdd: sourceAdd,
        sourcePin: sourcePin,
        destinationAdd: destinationAdd,
        destinationPin: destinationPin,
        mobileNo: mobileNo
      }
    });

    if(user){
      navigate('/')
    }
    else{
      navigate('/login_sign-up')
    }

  }

  return (
    <div className='transportation'>
        <div className='trans_container'>
        {/* Banner */}
          <img className='trans_image' src='https://img.freepik.com/premium-photo/truck-road-3d-rendering-illustration_37416-541.jpg?w=2000' />
          
      </div>
      <div className='trans_block'>
        <div className='trans_rowServices'>
        <h2 className='service_heading'>Services</h2>
            <Link className='services_link' to='/service_transpotation'>
              <h4 className='service_name'>Transportation</h4>
            </Link> 
            <Link className='services_link' to='/service_trucking'>
              <h4 className='service_name'>Trucking</h4>
            </Link> 
            <Link className='services_link' to='/service_supplychain'>
              <h4 className='service_name service_nameHigh'>Supplychain</h4>
            </Link> 
            <Link className='services_link' to='/service_warehousing'>
              <h4 className='service_name'>Warehousing</h4>
            </Link> 
            <Link className='services_link' to='/service_tPL'>
              <h4 className='service_name'>Third Party Logistics</h4>
            </Link>
            <Link className='services_link' to='/service_fullTruckLoad'>
              <h4 className='service_name'>Full Truckload</h4>
            </Link>
        </div>
        <div className='trans_rowForm'>
            <h2 className='service_heading'>Supplychain Summary</h2>

            <form>
                <h5>Name:</h5>
                <input className='trans_formInput' value={cName} onChange={e => setCName(e.target.value)} type="text" placeholder='Enter Your Name'/>
                <h5>Pickup Address:</h5>
                <input className='trans_formInput' value={sourceAdd} onChange={e => setSourceAdd(e.target.value)} type="text" placeholder='Enter Source City'/>
                <input className='trans_formInput' value={sourcePin} onChange={e => setSourcePin(e.target.value)} type="mobile" placeholder='Enter Source Pincode'/>
                <h5>Delivery Address:</h5>
                <input className='trans_formInput' value={destinationAdd} onChange={e => setDestinationAdd(e.target.value)} type="text" placeholder='Enter Destination City'/>
                <input className='trans_formInput' value={destinationPin} onChange={e => setDestinationPin(e.target.value)} type="number" placeholder='Enter Destination Pincode'/>
                <h5>Contact Info</h5>
                <input className='trans_formInput' value={mobileNo} onChange={e => setMobileNo(e.target.value)} type="number" placeholder='Enter Your Mobile Number'/>
           
                <button className='submit_Button' onClick={addToOrderTranspotation}>Place Shippment</button>

            </form>

            {/* form content */}
        </div>
      </div>
      
    </div>
  )
}

export default Supplychain
