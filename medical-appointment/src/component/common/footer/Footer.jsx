import React from "react";
import "./Footer.css";
import { LuHeartPulse, LuMapPin, LuPhone, LuMail } from "react-icons/lu";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_firstchild">
        <div className="Footer_logo">
          <h1>SEKAKO</h1>
          <p>Providing trusted healthcare solutions at your fingertips</p>
        </div>
        <div className="Footer_links">
          <div className="Footer_list">
            <p>Patient portal</p>
            <ul>
              <li>
                <Link className="Link_footer" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="Link_footer" to="/doctors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link className="Link_footer" to="/specialties">
                  specialties
                </Link>
              </li>
              <li>
                <Link className="Link_footer" to="/favo">
                  Favorites
                </Link>
              </li>
              <li>
                <Link className="Link_footer" to="/about">
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
     
     
        <div className="Footer_special">
          <p>Meet our experts</p>
          <ul>
            <li>Pediatrics</li>
            <li>Cardiology</li>
            <li>Orthopedics</li>
            <li>Dermatology</li>
            <li>General medicine</li>
            <li>Neurology</li>
            <li>Dentistry</li>
          </ul>
        </div>

        <div className="Footer_connected">
          <div className="Footer_connectedlist">
            <p>Stay connected</p>
            <li>
              <LuMapPin size={16} color="#5B9DF5" /> 123 Medical Plaza, Cairo,
              Egypt
            </li>
            <li>
              <LuPhone size={16} color="#5B9DF5" /> +20 (1017421272)
            </li>
            <li>
              <LuMail size={16} color="#5B9DF5" /> sekako@medcare.com
            </li>
          </div>
          <div className="Footer_social">
            <p>FOLLOW US</p>
            <div className="Footer_sociallist">
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" aria-label="Twitter / X">
                <FaXTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Footer;
