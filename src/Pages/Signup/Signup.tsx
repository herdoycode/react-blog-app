import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import apiClient from "../../services/apiClient";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const userClone = { ...user };
    userClone[e.currentTarget.name] = e.currentTarget.value;
    setUser(userClone);
  };

  if (error) toast.error(error);

  return (
    <div className="signup">
      <div className="signup__box">
        <h2>Signup</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            apiClient
              .post("/users", user)
              .then((res) => {
                localStorage.setItem("token", res.headers["x-auth-token"]);
                setLoading(false);
                navigate("/");
              })
              .catch((err) => {
                setError(err.message);
                setLoading(false);
              });
          }}
        >
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name.."
          />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="text"
            placeholder="Email Address..."
          />
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            type="text"
            placeholder="Password..."
          />
          <input
            name="avatar"
            value={user.avatar}
            onChange={handleChange}
            type="text"
            placeholder="Avatar url..."
          />
          <button>Signup</button>
        </form>
        <Link to="/login">Already have Account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
