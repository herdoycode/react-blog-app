import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact__box">
          <h2>Send Message</h2>
          <input type="text" name="sender" placeholder="Name..." />
          <input type="text" name="email" placeholder="Email Address..." />
          <textarea name="message" placeholder="Your Message..." />
          <button>
            Sent <SendOutlinedIcon />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
