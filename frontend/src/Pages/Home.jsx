import React, { useEffect } from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import { FaBus, FaFutbol, FaHome, FaChalkboardTeacher } from "react-icons/fa";
import class1 from "../images/class1.jpg";
import class2 from "../images/class2.jpg";
import class3 from "../images/class3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const facilities = [
    {
      icon: <FaBus />,
      title: "School Bus",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      color: "#ffe0dc",
      iconColor: "#ff5e42",
    },
    {
      icon: <FaFutbol />,
      title: "Playground",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      color: "#d2f0df",
      iconColor: "#2a9366",
    },
    {
      icon: <FaHome />,
      title: "Healthy Canteen",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      color: "#fff7d6",
      iconColor: "#ffc107",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Positive Learning",
      desc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      color: "#d6f6ff",
      iconColor: "#00bfff",
    },
  ];

  const classes = [
    { img: class1, name: "Art & Drawing" },
    { img: class2, name: "Color Management" },
    { img: class3, name: "Athletic & Dance" },
  ];

  return (
    <>
    <div className="home-container">
      {/* Hero Slider */}
      <div className="hero-slider" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          <SwiperSlide>
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${slide1})` }}
            >
              <div className="overlay" data-aos="fade-up">
                <h1>
                  The Best Kindergarten <br /> School For Your Child
                </h1>
                <p>
                  Vero elitr justo clita lorem. Ipsum dolor at sed <br /> stet
                  sit diam no. Kasd rebum ipsum et diam justo clita et kasd
                  rebum sea elitr.
                </p>
                <div className="buttons">
                  <a href="#learn" className="btn btn-primary">
                    Learn More
                  </a>
                  <a href="#classes" className="btn btn-dark">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${slide2})` }}
            >
              <div className="overlay" data-aos="fade-up">
                <h1>Creative Learning For Bright Minds</h1>
                <p>
                  Inspiring young learners with engaging activities and
                  fun-filled experiences every day.
                </p>
                <div className="buttons">
                  <a href="#learn" className="btn btn-primary">
                    Learn More
                  </a>
                  <a href="#classes" className="btn btn-dark">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Cards Section */}
      <div className="card-container" data-aos="fade-up">
        <div className="card" data-aos="fade-up" data-aos-delay={100}>
          <h3>Add a School</h3>
          <p>Add new schools with details like name and image.</p>
          <Link to="/add-school" className="btn">
            ➕ Add School
          </Link>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay={200}>
          <h3>View Schools</h3>
          <p>Check all schools stored in the system with details.</p>
          <Link to="/show-schools" className="btn">
            📋 Show Schools
          </Link>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="facilities-section" data-aos="fade-up">
        <h2 className="section-title">School Facilities</h2>
        <p className="section-subtitle">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
        <div className="facilities-container">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="facility-card"
              style={{ backgroundColor: facility.color }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="facility-icon"
                style={{ color: facility.iconColor }}
              >
                {facility.icon}
              </div>
              <h3
                className="facility-title"
                style={{ color: facility.iconColor }}
              >
                {facility.title}
              </h3>
              <p className="facility-desc">{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* School Classes Section */}
      <section className="school-classes" data-aos="fade-up">
        <div className="section-header" data-aos="fade-up">
          <h2>Our School Classes</h2>
          <p>
            Explore our fun and creative learning classes designed for kids to
            grow, learn, and enjoy.
          </p>
        </div>

        <div className="classes-container">
          {classes.map((cls, idx) => (
            <div
              className="class-card"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img src={cls.img} alt={cls.name} className="class-image" />
              <h3>{cls.name}</h3>
              <div className="teacher-info">
                <span>Jhon Doe - Teacher</span>
              </div>
              <div className="details">
                <p>
                  <b>Age:</b> 3-5 Years
                </p>
                <p>
                  <b>Time:</b> 9-10 AM
                </p>
                <p>
                  <b>Capacity:</b> 30 Kids
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
