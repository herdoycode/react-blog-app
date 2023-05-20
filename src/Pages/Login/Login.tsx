import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import apiClient from "../../services/apiClient";
import Spinner from "../../Components/Spenner/Spinner";

const schema = Joi.object({
  email: Joi.string().min(5).max(200).required().label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
});

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
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
            <input
              {...register("email")}
              type="email"
              className="form-control"
              id="email"
              placeholder="Email..."
            />
            {errors.email && (
              <p className="text-danger"> {errors.email.message} </p>
            )}
          </div>
          <div className="mb-3">
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password..."
            />
            {errors.password && (
              <p className="text-danger"> {errors.password.message} </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            {loading ? <Spinner /> : "Login"}
          </button>
          <p className="text-center mt-3">
            <Link to="/signup">Create new account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
