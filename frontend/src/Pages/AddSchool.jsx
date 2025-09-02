import React, { useState } from "react";
import axios from "axios";
import "../Css/AddSchool.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSchool = ({ onSchoolAdded }) => {
  const [school, setSchool] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setSchool((prev) => ({ ...prev, image: files[0] }));
    } else {
      setSchool((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(school).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.post(
        "http://localhost:5000/api/schools",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success(response.data.message || "✅ School added successfully!");

      onSchoolAdded?.();

      setSchool({
        name: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        email: "",
        image: "",
      });
    } catch (error) {
      toast.error(
        "❌ Could not add school: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>🏫 Add a School</h2>

        <input
          type="text"
          name="name"
          placeholder="School Name"
          value={school.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={school.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={school.city}
          onChange={handleChange}
          required
          pattern="^[A-Za-z\s]+$"
          title="City should only contain letters"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={school.state}
          onChange={handleChange}
          required
          pattern="^[A-Za-z\s]+$"
          title="State should only contain letters"
        />

        <input
          type="text"
          name="contact"
          placeholder="Phone Number"
          value={school.contact}
          onChange={handleChange}
          required
          pattern="^[0-9]{10}$"
          title="Phone number must be 10 digits"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={school.email}
          onChange={handleChange}
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$"
          title="Email must be a valid address ending with .com"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit">➕ Save School</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default AddSchool;
