import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from './logo.png'
import './Footer.css'
import { indigo, pink } from '@mui/material/colors';

function Footer() {
  return (
    <footer class="footer">
    <div class="container">

      <div class="footer-top section">

        <div class="footer-brand">

        <Link to="/"><img className='logo' src={logo} alt='img not found' /></Link>

          <p class="footer-text">
            Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          </p>
          <ul class="social-list">
            <li><a href="#" class="social-link"><FacebookIcon sx={{ color: "disabled", fontSize: 25 }}/></a></li>
            <li><a href="#" class="social-link"><TwitterIcon sx={{ color: "disabled" , fontSize: 25 }}/></a></li>
            <li><a href="#" class="social-link"><InstagramIcon sx={{ color:"disabled" , fontSize: 25 }}/></a></li>
            <li><a href="#" class="social-link"><YouTubeIcon sx={{ color: "disabled" , fontSize: 25 }}/>  </a>   </li>     

          </ul>

        </div>
        <div>
        <ul class="footer-list">

          <li><p class="footer-list-title">Quick Links</p></li>
          <li><a href="/about" class="footer-link">About</a></li>
          <li><a href="/service_transpotation" class="footer-link">Services</a></li>
          <li><a href="/about" class="footer-link">Blog</a></li>
          <li><a href="/contactUs" class="footer-link">FAQ</a></li>
          <li><a href="/contactUs" class="footer-link">Contact Us</a></li>

        </ul>
        </div>
        
        <div>
            <ul class="footer-list">
              <li><p class="footer-list-title">Services</p></li>
              <li><a href="#" class="footer-link">Transpotation</a></li>
              <li><a href="#" class="footer-link">Trucking</a></li>
              <li><a href="#" class="footer-link">Warehousing</a></li>
              <li><a href="#" class="footer-link">Supplychain</a></li>
              <li><a href="#" class="footer-link">Third Party Logistics</a></li>
            </ul>
        </div>

        
        <div>
        <ul class="footer-list">
            <li><p class="footer-list-title">Community</p></li>
            <li><a href="#" class="footer-link">Business Consulting</a></li>
            <li><a href="#" class="footer-link">Testimonials</a></li>
            <li><a href="#" class="footer-link">Track Your Shipment</a></li>
            <li><a href="#" class="footer-link">Privacy Policy</a></li>
            <li><a href="#" class="footer-link">Terms & Condition</a></li>
        </ul>
        </div>
        

      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2022 Transportio. All Rights Reserved by
        </p>
      </div>

    </div>
    
  </footer>
  )
}

export default Footer
