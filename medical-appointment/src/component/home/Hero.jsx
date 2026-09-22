
import heroimg from "../../assets/doctor-hero.png"
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import "./hero.css"
function Hero() {
  return (
    <div className="hero">
    <div className='container-lg'>
        
      <div className="row ">
        
        <div className="col-6 hero-text">
<h1 className="hero-title">
              Find the right doctor <br />
              for a healthier tomorrow
            </h1>
            <p className="hero-subtitle">
              Book appointments with the best doctors, easily and quickly.
            </p>
            <div className="search-box">
              <div className="search-bg">
                <span className="search-box-icon"> 
    <BsSearch/>
</span>
<input type="text" placeholder="Search by doctor name, specialty or location..."/>
              </div>


<button type="button" className="search-box-btn"  > Search</button>
            </div>
        </div>
        {/* <div className="col-6 hero-img ">
            <img   src={heroimg} alt="" />
        </div> */}
      </div>
      
    </div>
    </div>
  )
}

export default Hero
