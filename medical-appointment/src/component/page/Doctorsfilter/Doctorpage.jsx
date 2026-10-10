import React, { useState } from "react";
import "../Doctorsfilter/Doctorpage.css";
import { doctorsDatafilter } from "../../../data/Doctorsdatafilter";
import {
  FaStar,
  FaMapMarkerAlt,
  FaRegHeart,
  FaHeart,
  FaStarHalfAlt,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Doctorshome from "../../home/Doctorshome";
import { Link } from "react-router-dom";
import { usefavorites } from "../../../context/Contextfavo";

function filterbyinputsearch(data, inputsearch, checkeditem, filterstars) {
  return data.filter((e) => {
    const matchesName = e.name
      .toLowerCase()
      .includes(inputsearch.toLowerCase());
    const matchspecialty = checkeditem === "" || e.specialty == checkeditem;
    const matchrating = filterstars === "" || e.rating <= Number(filterstars);

    return matchesName && matchspecialty && matchrating;
  });
}

function Showcontent({ data }) {
  const { favo, toggle } = usefavorites();


  return data.map((item) => {
      const isfavo = favo.some((eve) => eve.id === item.id);

    return (
      <div key={item.id} className="one-doc">
        <div className="data-doc">
          <div className="doc-img">
            <Link to={`/profile/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
          <div className="doc-details">
            <h6>{item.name}</h6>
            <p>{item.specialty}</p>
            <p>{item.rating}</p>
            <p>
              <FaMapMarkerAlt color="#6B7280" /> {item.location}
            </p>
          </div>
        </div>

        <div className="Book-Appointment">
          <span onClick={() => toggle(item)}>
            {" "}
            {isfavo ? (
              <FaHeart style={{ color: "#ef4444", fontSize: "22px" }} />
            ) : (
              <FaRegHeart style={{ color: "#64748B", fontSize: "22px" }} />
            )}{" "}
          </span>
          <button>Book Appointment</button>
        </div>
      </div>
    );
  });
}

function Doctorpage() {
  ////states///////
  const [inputsearch, setInputsearch] = useState("");

  const [checkeditem, setCheckeditem] = useState("");

  const [filterstars, setFilterstars] = useState("");
  ////fun//////

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
                  <input
                    type="radio"
                    name="specialty"
                    value="Dentists"
                    checked={checkeditem === "Dentists"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="dentists"
                  />
                  <label htmlFor="dentists">Dentists</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="Cardiologist"
                    checked={checkeditem === "Cardiologist"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="cardiologist"
                  />
                  <label htmlFor="cardiologist">Cardiologist</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="Dermatologist"
                    checked={checkeditem === "Dermatologist"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="dermatologist"
                  />
                  <label htmlFor="dermatologist">Dermatologist</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="Pediatrics"
                    checked={checkeditem === "Pediatrics"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="pediatrics"
                  />
                  <label htmlFor="pediatrics">Pediatrics</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="Neurologist"
                    checked={checkeditem === "Neurologist"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="neurologist"
                  />
                  <label htmlFor="neurologist">Neurologist</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="Orthopedics"
                    checked={checkeditem === "Orthopedics"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="orthopedics"
                  />
                  <label htmlFor="orthopedics">Orthopedics</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="Ophthalmology"
                    checked={checkeditem === "Ophthalmology"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="ophthalmology"
                  />
                  <label htmlFor="ophthalmology">Ophthalmology</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value="ENT Specialist"
                    checked={checkeditem === "ENT Specialist"}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id="ent-specialist"
                  />
                  <label htmlFor="ent-specialist">ENT Specialist</label>
                </div>

                <div className="special-item">
                  <input
                    type="radio"
                    name="specialty"
                    value=""
                    checked={checkeditem === ""}
                    onChange={(event) => {
                      setCheckeditem(event.target.value);
                    }}
                    id=""
                  />
                  <label htmlFor="ent-specialist">All doctors</label>
                </div>
              </div>
              {console.log(checkeditem)}
            </div>
            <div className="head-rating">
              <p>Rating</p>
            </div>

            <div className="rating-filter">
              <div className="rating-item">
                <input
                  type="radio"
                  value="2"
                  checked={filterstars == "2"}
                  onChange={(e) => {
                    setFilterstars(e.target.value);
                  }}
                  name="rating"
                  id="two"
                />
                <label htmlFor="two">
                  {" "}
                  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" />{" "}
                </label>
              </div>
              <div className="rating-item">
                <input
                  type="radio"
                  value="3"
                  checked={filterstars == "3"}
                  onChange={(e) => {
                    setFilterstars(e.target.value);
                  }}
                  name="rating"
                  id="three"
                />
                <label htmlFor="three">
                  {" "}
                  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" />{" "}
                  <FaStar color="#FBBF24" />{" "}
                </label>
              </div>
              <div className="rating-item">
                <input
                  type="radio"
                  value="4"
                  checked={filterstars == "4"}
                  onChange={(e) => {
                    setFilterstars(e.target.value);
                  }}
                  name="rating"
                  id="four"
                />
                <label htmlFor="four">
                  {" "}
                  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" />{" "}
                  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" />{" "}
                </label>
              </div>
              <div className="rating-item">
                <input
                  type="radio"
                  value="5"
                  checked={filterstars == "5"}
                  onChange={(e) => {
                    setFilterstars(e.target.value);
                  }}
                  name="rating"
                  id="five"
                />
                <label htmlFor="five">
                  {" "}
                  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" />{" "}
                  <FaStar color="#FBBF24" /> <FaStar color="#FBBF24" />{" "}
                  <FaStar color="#FBBF24" />{" "}
                </label>
              </div>
              <div className="rating-item">
                <input
                  type="radio"
                  value=""
                  checked={filterstars == ""}
                  onChange={(e) => {
                    setFilterstars(e.target.value);
                  }}
                  name="rating"
                />
                <label htmlFor="five">All rating</label>
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
            <input
              value={inputsearch}
              onChange={(event) => {
                setInputsearch(event.target.value);
              }}
              type="text"
              placeholder="search doctors"
            />
          </div>

          <div className="doctorlist-doctors">
            <Showcontent
              data={filterbyinputsearch(
                doctorsDatafilter,
                inputsearch,
                checkeditem,
                filterstars,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctorpage;
