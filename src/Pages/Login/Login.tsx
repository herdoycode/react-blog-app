import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <div className="login__box">
          <h2>Login</h2>
          <input type="text" name="email" placeholder="Email Address..." />
          <input type="password" name="password" placeholder="Password..." />
          <button>Login</button>
          <button onClick={() => navigate("/signup")} className="btn__login">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
