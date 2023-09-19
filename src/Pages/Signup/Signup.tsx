import { joiResolver } from "@hookform/resolvers/joi";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Joi from "joi";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spenner/Spinner";
import AuthContext from "../../auth/AuthContext";
import { storage } from "../../firebase";
import apiClient from "../../services/apiClient";

const schema = Joi.object({
  name: Joi.string().max(200).required().label("Name"),
  email: Joi.string()
    .min(5)
    .required()
    .email({ tlds: { allow: false } })
    .label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
  avatar: Joi.any(),
});

interface FormData {
  name: string;
  email: string;
  password: string;
  avatar: FileList;
}

const Signup = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  const [loading, setLoading] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const file = data.avatar[0];
    const storageRef = ref(storage, `${Date.now()}`);
    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL: string) => {
        apiClient
          .post("/users", { ...data, avatar: downloadURL })
          .then((res) => {
            localStorage.setItem("token", res.headers["x-auth-token"]);
            setLoading(false);
            toast.success("Registered Success!");
            setTimeout(() => {
              window.location.href = "/";
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.message);
          });
      });
    });
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
          <div className="mb-3">
            <input
              {...register("name")}
              type="name"
              placeholder="Full name..."
            />
            {errors.name && (
              <p className="text-danger"> {errors.name.message} </p>
            )}
          </div>
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
              placeholder="Passwrod..."
            />
            {errors.password && (
              <p className="text-danger"> {errors.password.message} </p>
            )}
          </div>
          <div className="mb-3">
            <input {...register("avatar")} type="file" required />
            {errors.avatar && (
              <p className="text-danger"> {errors.avatar.message} </p>
            )}
          </div>

          <button disabled={loading === true} type="submit" className="btnn">
            {loading ? <Spinner /> : "Submit"}
          </button>
          <p className="text-center mt-3 link">
            <Link to="/login" style={{ color: "inherit" }}>
              Already have Account? Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
