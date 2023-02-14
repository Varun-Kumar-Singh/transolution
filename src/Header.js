import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.png'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './Header.css'
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{user, order}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/">
            <img className='header_logo' 
            src={logo} 
            alt='img not found' />
        </Link>
        
        
        <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon className="header_searchIcon" />

        </div>
        <div className='header_nav'>
            <Link className='login_link' to={!user && "/login_sign-up"}>
                <div onClick={ handleAuthentication } className='header_option'>
                    <span className='header_optionLineOne'>Hello {user? user.email : 'Guest'}</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <Link to={user? "/orders" : "/login_sign-up"}>
                <div className='header_option'>
                <span className='header_optionLineOne'>Shipments</span>
                <span className='header_optionLineTwo'>& Orders</span>
                </div> 
            </Link>
           
            <Link to="/checkout">
                <div className='header_optionTruck'>
                    <LocalShippingIcon />
                    <span className='header_optionLineOne header_shipmentCount'>{order?.length}</span>
                </div>
            </Link>
            
            
        </div>
    </div>
  )
}

export default Header
