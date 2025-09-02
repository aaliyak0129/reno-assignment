import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Get In Touch */}
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +012 345 67890
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@example.com
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#"><i className="fas fa-angle-right"></i> About Us</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Contact Us</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Our Services</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Privacy Policy</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Terms & Condition</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <form className="newsletter">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
