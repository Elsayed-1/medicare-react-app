import React from 'react'
import { doctorsDatafilter } from "../../../data/Doctorsdatafilter";
import {
  FaStar,
  FaMapMarkerAlt,
  FaRegHeart,
  FaHeart,
  FaArrowLeft,
  FaLanguage,
  FaBriefcaseMedical,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaGraduationCap,
  FaHeartBroken,
} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import "../Doctorprofile/doctorinfo.css"
import { FaHeartCircleBolt } from 'react-icons/fa6';
function Doctorinfo({doctors}) {
 
  return (
    <div className='container-lg'>
      <div className="doc-prof">
        <div className="img-doc-prof">
  <img src={doctors.image} alt="" />
        </div>
        <div className="data-doc-prof">
            <div className="nameandlove">
                <h1>{doctors.name}</h1>
                   <p><FaRegHeart  className='heart-data-icon'   /></p> 
            </div>
            
            <p className='specialty'>{doctors.specialty}</p>

            <p> <FaStar color='#F59E0B' size={20}/>  {doctors.rating} ({doctors.reviewsCount} rewiew )</p>
            <div className="location">
                <p> <FaMapMarkerAlt color='#6B7280' size={20}/> {doctors.location} </p>
                <p> <FaBriefcaseMedical size={20}/> {doctors.experienceYears} years experiance </p>
            </div>
            <p> <FaLanguage size={20}/> {doctors.languages} </p>
        </div>
        
      </div>
    </div>
  )
}

export default Doctorinfo
