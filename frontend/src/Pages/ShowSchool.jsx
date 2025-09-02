import React, { useEffect, useState } from "react";
import axios from "axios";
import SchoolCard from "../Components/SchoolCard";
import "../Css/ShowSchool.css";

const ShowSchool = () => {
  const [schools, setSchools] = useState([]);

  // Fetch all schools from backend
  const fetchSchools = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/schools");
      setSchools(res.data);
    } catch (err) {
      console.error("Error fetching schools:", err);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <>
    <div className="show-school-container">
      <h2>📋 All Schools</h2>
      <div className="school-list">
        {schools.length === 0 ? (
          <p>No schools found.</p>
        ) : (
          schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))
        )}
      </div>
    </div></>
  );
};

export default ShowSchool;
