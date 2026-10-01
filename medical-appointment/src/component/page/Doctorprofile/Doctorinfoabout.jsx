import React from 'react'
import { doctorsDatafilter } from "../../../data/Doctorsdatafilter";
import "../Doctorprofile/aboutprof.css"
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
function Doctorinfoabout({doctors}) {
      
  return (
    <div className='container-lg'>
        <div className="about">
            <div className="about-body">
                <h3>About</h3>
                 <p>{doctors.about}</p>
            </div>
            
            <div className="about-education">
<h3>Education</h3>
<p> <FaCheckCircle/> {doctors.education}</p>
<p> <FaCheckCircle/> Master in  {doctors.specialty}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Doctorinfoabout
