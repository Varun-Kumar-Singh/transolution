import React from 'react'
import './Home.css'
import Services from './Services'
import TPL from './TPL.png'
import FTL from './FTL.png'
import Transpotation from './Transpotation.png'
import Trucking from './Trucking.png'
import Warehousing from './Warehousing.png'
import Supplychain from './Supplychain.png'


function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        {/* Banner */}
          <img className='home_image' src='https://img.freepik.com/premium-photo/truck-road-3d-rendering-illustration_37416-541.jpg?w=2000' />
          
      </div>
        {/* Services */}
      <div className='home_row'>
        {/* service 1 */}
        <Services
          service_name='Transpotation'
          image={Transpotation}
          link='/service_transpotation'
        />
        <Services 
        service_name='Trucking'
        image={Trucking}
        link='/service_trucking'
        />
        {/* service 2 */}
      </div>
      <div className='home_row'>
        {/* service 1 */}
        <Services
        service_name='Warehousing'
        image={Warehousing}
        link='/service_warehousing'/>
        {/* service 2 */}
        <Services
        service_name='Supply Chain'
        image={Supplychain}
        link='/service_supplychain'
        />
        {/* service 3 */}
        <Services
        service_name='Third Party Logistics'
        image={TPL}
        link='/service_tPL'
        />
      </div>
      <div className='home_row'>
        {/* service 1 */}
        <Services
        service_name='Full Truckload'
        image={FTL}
        link='/service_fullTruckLoad'
        />
      </div>
    </div>
  )
}

export default Home
