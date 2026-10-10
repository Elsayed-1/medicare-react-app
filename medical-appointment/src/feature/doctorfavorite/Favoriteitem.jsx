import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { usefavorites } from '../../context/Contextfavo';
import "../doctorfavorite/favoitem.css";

function Favoriteitem() {
  const { favo, toggle } = usefavorites();

  return (
    <div className="container-lg">
      <div className="page-head">
        <h1>My Favorite Doctors</h1>
      </div>

      <div className="page">
        <div className="doctorlist-sec" style={{ width: "100%" }}>
          <div className="doctorlist-doctors">
            {favo && favo.length > 0 ? (
              favo.map((item) => {
                return (
                  <div key={item.id} className="one-doc">
                    <div className="data-doc">
                      <div className="doc-img">
                        <Link to={`/profile/${item.id}`}>
                          <img src={item.image} alt={item.name} />
                        </Link>
                      </div>
                      <div className="doc-details">
                        <h6>{item.name}</h6>
                        <p>{item.specialty}</p>
                        <p>⭐ {item.rating}</p>
                        <p>
                          <FaMapMarkerAlt color="#6B7280" /> {item.location}
                        </p>
                      </div>
                    </div>

                    <div className="Book-Appointment">
                      <span onClick={() => toggle(item)} style={{ cursor: "pointer" }}>
                        <FaHeart style={{ color: "#ef4444", fontSize: "22px" }} />
                      </span>
                      <Link to={`/profile/${item.id}`}>
                        <button>Book Appointment</button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="no-favorites" style={{ textAlign: "center", width: "100%", padding: "40px", color: "#64748B" }}>
                No favorite doctors added yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favoriteitem;