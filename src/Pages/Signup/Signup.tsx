import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import apiClient from "../../services/apiClient";
import Spinner from "../../Components/Spenner/Spinner";

const schema = Joi.object({
  name: Joi.string().max(200).required().label("Name"),
  email: Joi.string().min(5).max(200).required().label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
  avatar: Joi.string().min(5).max(1000).required().label("Avatar Url"),
});

interface FormData {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const Signup = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="text-center mb-4">Signup</h2>
        <form
          onSubmit={handleSubmit((data) => {
            setLoading(true);
            apiClient
              .post("/users", data)
              .then((res) => {
                localStorage.setItem("token", res.headers["x-auth-token"]);
                setLoading(false);
                window.location.href = "/";
              })
              .catch((err) => {
                toast.error(err.message);
                setLoading(false);
              });
          })}
          className="w-100"
        >
          <div className="mb-3">
            <input
              {...register("name")}
              type="name"
              className="form-control"
              placeholder="Full name..."
            />
            {errors.name && (
              <p className="text-danger"> {errors.name.message} </p>
            )}
          </div>
          <div className="mb-3">
            <input
              {...register("email")}
              type="email"
              className="form-control"
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
              placeholder="Passwrod..."
            />
            {errors.password && (
              <p className="text-danger"> {errors.password.message} </p>
            )}
          </div>
          <div className="mb-3">
            <input
              {...register("avatar")}
              type="text"
              className="form-control"
              placeholder="Avatar url..."
            />
            {errors.avatar && (
              <p className="text-danger"> {errors.avatar.message} </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            {loading ? <Spinner /> : "Login"}
          </button>
          <p className="text-center mt-3">
            <Link to="/login">Already have Account? Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
