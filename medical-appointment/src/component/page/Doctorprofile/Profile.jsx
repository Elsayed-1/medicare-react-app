import React, { useState } from "react";
import "../Doctorprofile/profile.css";
import { doctorsDatafilter } from "../../../data/Doctorsdatafilter";
import { useParams, Link } from "react-router-dom";
import {
   
  FaArrowLeft,
   
} from "react-icons/fa";
import Doctorinfo from "./Doctorinfo";
import Doctorinfoabout from "./Doctorinfoabout";
import BookingAppointment from "./booking/BookingAppointment";
 

function Profile() {

  const { id } = useParams();
     const isexist = doctorsDatafilter.find((eve) => eve.id === id);

  if (!isexist) {
    return <h1>not found</h1>;
  }
 

  return (
    
    <div className="container-lg profile">

       <Link to="/doctors" className="back-link">
        <FaArrowLeft /> Back to Doctors
      </Link>


<div className="profile-component">
  <div className="data-and-about">
        <Doctorinfo doctors={isexist}/>
  <Doctorinfoabout doctors={isexist}/>
  </div>
  <div className="Availabledate">
  <BookingAppointment doctors={isexist}/>

  </div>
</div>
 
    </div>
      
     
      

       
     
  );
}

export default Profile;