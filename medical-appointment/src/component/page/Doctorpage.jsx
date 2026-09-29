import React from "react";
import "./Doctorpage.css";
import { doctorsData } from "../../data/Doctorsdata";
import {
  FaStar,
  FaMapMarkerAlt,
  FaRegHeart,
  FaHeart,
  FaStarHalfAlt,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Doctorshome from "../home/Doctorshome";
function Doctorpage() {
  return (
    <div className="container-lg">
       <div className="page-head">
          <h1>Find Your Doctor & Book an Appointment</h1>
        </div>
      <div className="page">
       
        <div className="filter-sec">

  <div className="filter-data">
    <div className="head-filter">
       <h3>Filter</h3>
    <p>Specialty</p>
    </div>
   


   <div className="special-filter">
    <div className="special-filter">

  <div className="special-item">
    <input type="checkbox" id="dentists" />
    <label htmlFor="dentists">Dentists</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="cardiologist" />
    <label htmlFor="cardiologist">Cardiologist</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="dermatologist" />
    <label htmlFor="dermatologist">Dermatologist</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="pediatrics" />
    <label htmlFor="pediatrics">Pediatrics</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="neurologist" />
    <label htmlFor="neurologist">Neurologist</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="orthopedics" />
    <label htmlFor="orthopedics">Orthopedics</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="ophthalmology" />
    <label htmlFor="ophthalmology">Ophthalmology</label>
  </div>

  <div className="special-item">
    <input type="checkbox" id="ent-specialist" />
    <label htmlFor="ent-specialist">ENT Specialist</label>
  </div>

</div>

   </div>
    <div className="head-rating">
        <p>Rating</p>
    </div>
   
     <div className="rating-filter">
<div className="rating-item">
    <input type="checkbox" id="two" />
    <label htmlFor="two">   <FaStar color="#FBBF24"   /> <FaStar color="#FBBF24" /> </label>
  </div>
 <div className="rating-item">
    <input type="checkbox" id="three" />
    <label htmlFor="three"> <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> </label>
  </div>
   <div className="rating-item">
    <input type="checkbox" id="four" />
    <label htmlFor="four">  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> </label>
  </div>
   <div className="rating-item">
    <input type="checkbox" id="five" />
    <label htmlFor="five">   <FaStar color="#FBBF24" />  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" /> </label>
  </div>

     </div>
   



  </div>



        </div>
        <div className="doctorlist-sec">
          <div className="doctorlist-search">
            <span>
              {" "}
              <BsSearch />{" "}
            </span>
            <input type="text" placeholder="search doctors" />
          </div>

          <div className="doctorlist-doctors">
            {doctorsData.map((item) => {
              return (
                <div className="one-doc">
                  <div className="data-doc">
                    <div className="doc-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="doc-details">
                             <h6>{item.name}</h6>
                             <p>{item.specialty}</p>
                             <p>{item.rating}</p>
                             <p><FaMapMarkerAlt color="#6B7280" />  {item.location}</p>



                    </div>
                  </div>

                  <div className="Book-Appointment">
                    <span> <FaRegHeart color="#374151" size={20}/> </span>
                    <button>Book Appointment</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctorpage;
