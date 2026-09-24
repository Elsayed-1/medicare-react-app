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
      <div className="doctor-page">
        <div className="doc-filter"></div>
        <div className="doc-sec">
          <div className="search-doc-sec">
            <div className="searchdiv">
                  <span>
              <BsSearch size={15} />
            </span>
            <input type="text" placeholder="search" />
            </div>
          
            <select name="" id="">
              <option value="">sort by </option>
            </select>
          </div>
          <div className="All-doc-sec">
            {doctorsData.map((item) => {
              return (
                <div key={item.id} className="element">
                  <div className="one-ele">
                    <div className="img-ele">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="Alldata-ele">
                      <div className="ele-name">
                        <p>{item.name}</p>
                      </div>
                      <div className="description-ele ">
                        <h6>{item.specialty}</h6>
                        <p>
                          {" "}
                          <span>({item.rating})</span>{" "}
                        </p>
                        <h6>
                          {" "}
                          <FaMapMarkerAlt /> {item.location}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="heartandbtn">
                    <p>
                      {" "}
                      <FaHeart />{" "}
                    </p>
                    <button>Book Apponment</button>
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
