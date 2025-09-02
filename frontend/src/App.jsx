import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddSchool from "./Pages/AddSchool";
import ShowSchools from "./Pages/ShowSchool";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
const App = () => {
  return (
    <>
         <ToastContainer position="top-center" autoClose={1000} />
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-school" element={<AddSchool />} />
          <Route path="/show-schools" element={<ShowSchools />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
