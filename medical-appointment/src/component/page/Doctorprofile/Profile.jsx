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
    
    <div className="container-lg">

       <Link to="/doctors" className="back-link">
        <FaArrowLeft /> Back to Doctors
      </Link>

     <Doctorinfo doctors={isexist}/>
  <Doctorinfoabout doctors={isexist}/>
  <BookingAppointment doctors={isexist}/>
    </div>
      
     
      

       
     
  );
}

export default Profile;