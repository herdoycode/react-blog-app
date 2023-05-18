import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__box">
        <h2>Signup</h2>
        <input type="text" name="name" placeholder="Full Name.." />
        <input type="text" name="email" placeholder="Email Address..." />
        <input type="text" name="password" placeholder="Password..." />
        <input type="text" name="avatar" placeholder="Avatar url..." />
        <button>Signup</button>
        <Link to="/login">Already have Account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
