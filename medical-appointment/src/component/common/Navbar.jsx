import React from 'react'
import { BsSearch } from 'react-icons/bs';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const naveg=useNavigate()
  return (
    <div className='home-nav'>
      <div className="navbar">
        <div className="container-fluid">
            <div className="logo">
              <h2>SEKAKO</h2>
            </div>
            <div className="list-home">
             <ul>
  <li><Link to="/">home</Link></li>
  <li><Link to="/doctors">Doctors</Link></li>
  <li><Link to="/specialties">specialties</Link></li>
  <li><Link to="/favo">Favorites</Link></li>
  <li><Link to="/about">about</Link></li>
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
