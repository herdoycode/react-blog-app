import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spenner/Spinner";
import AuthContext from "../../auth/AuthContext";
import apiClient from "../../services/apiClient";
import "./Login.css";

const schema = Joi.object({
  email: Joi.string().min(5).max(200).required().label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
});

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  const [loading, setLoding] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="text-center mb-4">Login</h2>
        <form
          onSubmit={handleSubmit((data) => {
            setLoding(true);
            apiClient
              .post("/auth", data)
              .then((res) => {
                localStorage.setItem("token", res.data);
                setLoding(false);
                window.location.href = "/";
              })
              .catch((err) => {
                toast.error(err.message);
                setLoding(false);
              });
          })}
          className="w-100"
        >
          <div className="mb-3">
            <input {...register("email")} type="email" placeholder="Email..." />
            {errors.email && (
              <p className="text-danger"> {errors.email.message} </p>
            )}
          </div>
          <div className="mb-3">
            <input
              {...register("password")}
              type="password"
              placeholder="Password..."
            />
            {errors.password && (
              <p className="text-danger"> {errors.password.message} </p>
            )}
          </div>

          <button disabled={loading === true} type="submit" className="btnn">
            {loading ? <Spinner /> : "Login"}
          </button>
          <p className="text-center mt-3 link">
            <Link to="/signup" style={{ color: "inherit" }}>
              Create new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
