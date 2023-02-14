import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css';

// import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Services({service_name,image,link}) {
  return (
   
      <div className='services'>
        <div className='service_icon'>
        <Link to={link}><img className='service_img' src={image}/></Link>

        {/* <LocalShippingIcon sx={{ fontSize: 200}}/> */}
        </div>
      <div className='service_info'>
        <h3>{service_name}</h3>
      </div>
    </div>
     
  )
}

export default Services
