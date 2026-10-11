import React from 'react'
import { BsSearch } from 'react-icons/bs';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/Authenticationcxt';
function Navbar() {
  const naveg=useNavigate()
  const {islogged,logout,user}=useAuth()
  const user_name=user.email.split("@")[0].split("1")[0]
 function handellogout(){
logout()
naveg("/login")
 }
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
              {islogged? <span> Hi , {user_name}</span>:""}
              {/* <span className='search-icon'> <BsSearch/> </span> */}
{console.log(user_name)}
{islogged?<button className='btn-logout' onClick={()=>handellogout()} >Logout</button>:  
<Link to="/Login">
<button className='btn-login' >Login</button>
</Link>}




            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
