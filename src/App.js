import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'mdbreact/dist/css/mdb.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './MVC/Component/Navigationbar/nav'
import RouterLink from './MVC/Controler/RouterLink/RouterLink'
//Datepicker
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import FooterPic from './Images/Footer.jpg'
import Footerpage from './MVC/Component/Footer/Footer'
import $ from 'jquery'
import './MVC/Component/CSS/BackToTop.css'
class App extends Component {
  
  render() {
    
      AOS.init();
  // You can also pass an optional settings object
  // below listed default settings
      AOS.init({
        // Global settings
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

        
        // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
        var btn = $('#button');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            } else {
            btn.removeClass('show');
            }
        });
        
        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });
        
  
    return (
      <div className="App">
        <Navbar/>
        <RouterLink/>
        <Footerpage/>
        <a   id="button">
         </a>
      </div>
      
    );
  }
}

export default App;
