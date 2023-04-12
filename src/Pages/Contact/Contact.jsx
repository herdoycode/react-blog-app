import "./Contact.css";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addmessages } from "../../store/messages";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const Contact = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    sender: "",
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
    dispatch(addmessages(message));
  };

  const result = useSelector((state) => state.entities.messages.result);
  const loading = useSelector((state) => state.entities.messages.loading);

  useEffect(() => {
    if (result) {
      toast.success("Successfully sent message");
      setMessage({
        sender: "",
        email: "",
        message: "",
      });
    }
  }, [result]);

  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact__box">
          <h2>Send Message</h2>
          <input
            type="text"
            name="sender"
            value={message.sender}
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
            {loading ? (
              <Loading />
            ) : (
              <>
                Sent <SendOutlinedIcon />
              </>
            )}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
