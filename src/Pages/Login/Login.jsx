import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../store/auth";
import { toast } from "react-toastify";
import "./Login.css";
import Loading from "../../Components/Loading/Loading";

const Login = () => {
  const user = useSelector((state) => state.entities.users.user);
  const loading = useSelector((state) => state.auth.loading);

  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    if (user) return navigate("/");
  }, []);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const accountClone = { ...account };
    accountClone[e.target.name] = e.target.value;
    setAccount(accountClone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(authLogin(account));
  };

  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    if (token) {
      toast.success("Login Success :)");
      setTimeout(() => (window.location = "/"), 1500);
    }
  }, [handleSubmit, token]);

  return (
    <>
      <div className="login">
        <div className="login__box">
          <h2>Login</h2>
          <input
            type="text"
            name="email"
            value={account.email}
            onChange={handleChange}
            placeholder="Email Address..."
          />
          <input
            type="password"
            name="password"
            value={account.password}
            onChange={handleChange}
            placeholder="Password..."
          />
          <button onClick={handleSubmit}>
            {loading ? <Loading /> : "Login"}
          </button>
          <button onClick={() => navigate("/signup")} className="btn__login">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
