import React from "react";
import "../Css/SchoolCard.css";

const SchoolCard = ({ school }) => {
  return (
<>
    <div className="school-card">
      {school.imageUrl ? (
        <img src={school.imageUrl} alt={school.name} className="school-image" />
      ) : (
        <div className="no-image">No Image</div>
      )}
      <div className="school-info">
        <h3>{school.name}</h3>
        <p>{school.address}</p>
        <p>{school.city}, {school.state}</p>
        <p>📞 {school.contact}</p>
        <p>✉️ {school.email}</p>
      </div>
    </div>
</>
  );
};

export default SchoolCard;
