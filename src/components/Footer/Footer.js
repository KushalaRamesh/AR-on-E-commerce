import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          <Link
            to="/about"
          >
            About
          </Link>
      
        
        </div>

        <div className="contact-content">
          
          <Link to="/"> Store Policy </Link>
      
        </div>

        <div className="contact-content">
          <Link to="/feedback"> Feedback </Link>
          <Link to="mailto:dhanya.vks18@gmail.com" target="_blank">
            Contact
          </Link>
          <Link to="/"> Tel: 123-456-7890 </Link>
        </div>

        <div className="">
          
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
      <div class="last">
        <p>@ 2025 AR-Website | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
