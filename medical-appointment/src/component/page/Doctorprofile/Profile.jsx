import React, { useState } from "react";
import "../Doctorprofile/profile.css";
import { doctorsDatafilter } from "../../../data/Doctorsdatafilter";
import { useParams, Link } from "react-router-dom";
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
} from "react-icons/fa";

function Profile() {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const isexist = doctorsDatafilter.find((eve) => eve.id === id);

  if (!isexist) {
    return <h1>not found</h1>;
  }

  return (
    <div className="container-lg">
      {/* رابط الرجوع */}
      <Link to="/doctors" className="back-link">
        <FaArrowLeft /> Back to Doctors
      </Link>

      <div className="profile">
        <div className="pro-img">
          <img src={isexist.image} alt={isexist.name} />
        </div>

        <div className="pro-data">
          <div className="pro-name-row">
            <h1>{isexist.name}</h1>
            <span
              className="fav-icon"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <FaHeart color="#e11d48" size={22} />
              ) : (
                <FaRegHeart color="#374151" size={22} />
              )}
            </span>
          </div>

          <h3 className="specialty-text">{isexist.specialty}</h3>

          <h3>
            <FaStar color="#FBBF24" /> {isexist.rating}{" "}
            <span className="reviews-count">
              ({isexist.reviewsCount} reviews)
            </span>
          </h3>

          <div className="loc-exe">
            <h3>
              <FaMapMarkerAlt color="#6B7280" /> {isexist.location}
            </h3>
            <h3>
              <FaBriefcaseMedical color="#6B7280" />{" "}
              {isexist.experienceYears} years experience
            </h3>
          </div>

          <h3>
            <FaLanguage color="#6B7280" /> Languages:{" "}
            {isexist.languages.join(", ")}
          </h3>
        </div>
      </div>

      <div className="details-grid">
        {/* قسم About */}
        <div className="about-sec">
          <h3>About</h3>
          <p>{isexist.about}</p>

          <h3>
            <FaGraduationCap /> Education
          </h3>
          <ul>
            {isexist.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>

        {/* قسم Available Appointments */}
        <div className="appointments-sec">
          <h3>Available Appointments</h3>
          <div className="calendar-nav">
            <FaChevronLeft className="nav-arrow" />
            <span>September 2026</span>
            <FaChevronRight className="nav-arrow" />
          </div>

          {/* الكالندر نفسه هنضيفه لاحقًا هنا */}

          <h3>
            <FaClock /> Available Times
          </h3>
          <div className="times-list">
            {/* أزرار الأوقات هنضيفها هنا بعد ربطها بـ availableSlots */}
          </div>

          <button className="book-btn">Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;