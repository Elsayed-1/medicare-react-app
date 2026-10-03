import React from 'react'
import   { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doctorsDatafilter } from '../../../../data/Doctorsdatafilter';
import { useParams } from 'react-router-dom';
import "../booking/bookingappointment.css"
function BookingAppointment({doctors}) {
  
    
  const [startDate, setStartDate] = useState(new Date());
   

  return (
    <div className="container-lg">
        <div className="booking">
             <div className='book-date'>
     <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} inline />
      {/* {console.log(startDate.getHours())} */}
    </div>
     <div className="head-available">
        <h3>Available time</h3>
      </div>
    <div className="avaliabletime">
     
         {doctors.availableSlots['2026-09-20']?.map((time,index)=>{
            return <button className='btn-available' key={index} >{time}</button>
         })}
    </div>
        </div>
       
    </div>
    
  )

}
export default BookingAppointment
