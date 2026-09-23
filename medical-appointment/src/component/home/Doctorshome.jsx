import React from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaRegHeart,
  FaHeart,
  FaStarHalfAlt,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { doctorsData } from "../../data/Doctorsdata";
import "./doctors.css";
function Doctorshome() {
  //handelstar
  function handelstar(rate) {
    const stars = [];
    const fullstar = Math.floor(rate);
    const halfstar = rate % 1 >= 0.5;

    for (let i = 0; i < fullstar; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (halfstar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    return stars;
  }

  return (
    <div className="Doctorshome">
      <div className="container-lg">
        <div className="headDoctorshome">
          <h3>Popular doctors</h3>
          <p>
            <a href="#">
              viwe all <BsArrowRight />{" "}
            </a>
          </p>
        </div>
        <div className="Alldoctors row ">
          {doctorsData.map((item) => {
            return (
              <div key={item.id} className=" carddoc align-items-center col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="onedoctor  ">
                  <div className="imgdoc">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="datadoc">
                    <div className="name">
                      <p>{item.name}</p>
                      <p>
                        {" "}
                        <FaHeart />{" "}
                      </p>
                    </div>
                    <div className="position">
                      <h6>{item.specialty}</h6>
                      <p>{handelstar(item.rating)} <span>({item.rating})</span> </p>
                      <h6>
                        {" "}
                        <FaMapMarkerAlt /> {item.location}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Doctorshome;
