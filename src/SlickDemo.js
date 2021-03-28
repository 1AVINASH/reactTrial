import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css';  
export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: false,
          infinite: true, 
          autoplay: true,
          autoplaySpeed: 1500,
          speed: 2000,
          accessibility: false,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          centerMode: false,  
          slidesToShow: 1,
          slidesToScroll: 1,
          };  
          return (  
            <div>        
            <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {'assets/Group@2x.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  src= {'assets/Group 2@2x.png'} className="img"/>  
              </div> 
            </Slider> 
            <div>
            <p className="header" style={{fontWeight: "bold", letterSpacing: "-0.12px"}}> Type Text </p>
            <p className = "leftPartContent" style={{letterSpacing: "-0.11px", lineHeight: "27px"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>
            </div>  
          );  
        }  
      }  
  
export default SlickDemo