import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import apiClient from "../../services/apiClient";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <div className="login__box">
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (emailRef.current && passwordRef.current)
                apiClient
                  .post("/auth", {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                  })
                  .then((res) => {
                    localStorage.setItem("token", res.data);
                    navigate("/");
                  })
                  .catch((err) => toast(err.message));
            }}
          >
            <input
              className="mb-3"
              ref={emailRef}
              type="text"
              placeholder="Email Address..."
            />
            <input
              className="mb-3"
              ref={passwordRef}
              type="password"
              placeholder="Password..."
            />
            <button>Login</button>
          </form>
          <button onClick={() => navigate("/signup")} className="btn__login">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
