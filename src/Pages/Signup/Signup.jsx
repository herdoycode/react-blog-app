import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__box">
        <h2>Signup</h2>
        <input type="text" placeholder="Full Name.." />
        <input type="text" placeholder="Email Address..." />
        <input type="text" placeholder="Password..." />
        <button> Signup </button>
        <Link to="/login">Already have Account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
