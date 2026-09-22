import React from "react";
import { specialtiesData } from "../../data/Specialties";
import "./Specialtieshome.css"
function Specialtieshome() {
  return (
    <div className="Specialtieshome">
      <div className="container-lg">
        <div className="row   ">
          {specialtiesData.map((item) => {
            return <div  key={item.id} className=" align-items-center col-5 col-md-6 col-lg-4 col-xl-3">
  <div className="onespecial">
    <div className="special-icon">
         <item.icon color={item.color} size={25}/>
    </div>
   
    <h6>{item.title}</h6>
<span>{item.count}</span>
  </div>


            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Specialtieshome;
