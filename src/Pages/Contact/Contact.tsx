import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spenner/Spinner";
import AuthContext from "../../auth/AuthContext";
import apiClient from "../../services/apiClient";

const schema = Joi.object({
  sender: Joi.string().max(200).required().label("Name"),
  email: Joi.string().min(5).max(200).required().label("Email"),
  message: Joi.string().max(3000).required().label("Message"),
});

interface FormData {
  sender: string;
  email: string;
  message: string;
}

const Contact = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [loading, setLoding] = useState<Boolean>(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form
          onSubmit={handleSubmit((data) => {
            setLoding(true);
            apiClient
              .post("/messages", data)
              .then((res) => {
                setLoding(false);
                toast.success("Successfuly sent message");
                reset();
              })
              .catch((err) => {
                toast.error(err.message);
                setLoding(false);
              });
          })}
          className="w-100"
        >
          <div className="mb-3">
            <input {...register("sender")} type="text" placeholder="Name.." />
            {errors.sender && (
              <p className="text-danger"> {errors.sender.message} </p>
            )}
          </div>
          <div className="mb-3">
            <input {...register("email")} type="email" placeholder="Email..." />
            {errors.email && (
              <p className="text-danger"> {errors.email.message} </p>
            )}
          </div>
          <div className="mb-3">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-danger"> {errors.message.message} </p>
            )}
          </div>

          <button disabled={loading === true} type="submit" className="btnn">
            {loading ? <Spinner /> : "Sent"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
