import "./Contact.css";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const messageClone = { ...message };
    messageClone[e.target.name] = e.target.value;
    setMessage(messageClone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact__box">
          <h2>Send Message</h2>
          <input
            type="text"
            name="email"
            value={message.name}
            onChange={handleChange}
            placeholder="Name..."
          />
          <input
            type="text"
            name="email"
            value={message.email}
            onChange={handleChange}
            placeholder="Email Address..."
          />
          <textarea
            rows="4"
            type="text"
            name="message"
            value={message.message}
            onChange={handleChange}
            placeholder="Your Message..."
          />
          <button onClick={handleSubmit}>
            Sent <SendOutlinedIcon />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
