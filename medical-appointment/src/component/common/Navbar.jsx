import React from 'react'
import { BsSearch } from 'react-icons/bs';
import "./Navbar.css"
function Navbar() {
  return (
    <div className='home-nav'>
      <div className="navbar">
        <div className="container-fluid">
            <div className="logo">
              <h2>SEKAKO</h2>
            </div>
            <div className="list-home">
              <ul>
                <li><a href="">home</a></li>
                <li><a href="">Doctors</a></li>
                <li><a href="">specialties</a></li>
                <li><a href="">about</a></li>
              </ul>
            </div>
            <div className="login-home">
              <span className='search-icon'> <BsSearch/> </span>
<button className='btn-login' >Login</button>
<button className='btn-logout' >Logout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
