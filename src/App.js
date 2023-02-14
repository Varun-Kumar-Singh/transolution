import React, { useEffect } from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Transportation from "./Transportation";
import Trucking from "./Trucking"
import Warehousing from "./Warehousing"
import Supplychain from "./Supplychain"
import ThirdPartyLogistics from "./ThirdPartyLogistics"
import FullTruckLoad from "./FullTruckLoad"
import Login from "./Login"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Footer";
import About from "./About";
import ContactUs from "./ContactUs";
import Payment from "./Payment";
import TrackShipment from "./TrackShipment";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect (() => {
    // it will run only once when the app component load 
     auth.onAuthStateChanged(authUser => {
                             console.log('THE USER IS >>>', authUser)

                              if(authUser) {
                              // The user logged in 
                               dispatch({
                                 type: 'SET_USER',
                                  user: authUser
                               })
                             }
                              else {
                                // The user is logged out
                               dispatch({
                                  type: 'SET_USER',
                                 user: null
                                })
                             }
    })
  },[])

  
  return (
    <Router>
      <div className="App">
      
      <Routes>
        <Route path="/payment" element={<><Header/><Payment/></>}/>
        <Route path="/contactUs" element={<><Header/><ContactUs/></>}/>
        <Route path="/about" element={<><Header/><About/></>}/>
        <Route path="/service_transpotation" element={<><Header/><Transportation/></>}/>
        <Route path="/service_trucking" element={<><Header/><Trucking/></>}/>
        <Route path="/service_warehousing" element={<><Header/><Warehousing/></>}/>
        <Route path="/service_supplychain" element={<><Header/><Supplychain/></>}/>
        <Route path="/service_tPL" element={<><Header/><ThirdPartyLogistics/></>}/>
        <Route path="/service_fullTruckLoad" element={<><Header/><FullTruckLoad/></>}/>
        <Route path="/login_sign-up" element={<><Login/></>}/>
        <Route path="/orders" element={<><Header/><TrackShipment/></>}/>
        <Route path="/checkout" element={<><Header/><Checkout/></>}/>
        <Route path="/" element={<><Header/><Home/><Footer/></>}/>
      </Routes>
    </div>
    </Router>
  );
}
export default App;

