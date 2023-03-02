import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userRegistered } from "../../store/users";

const Signup = () => {
  const dispacth = useDispatch();
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const handleChange = (e) => {
    const accountClone = { ...account };
    accountClone[e.target.name] = e.target.value;
    setAccount(accountClone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(userRegistered(account));
  };

  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    if (localStorage.getItem("token")) return (window.location = "/");
  }, [handleSubmit, token]);

  return (
    <div className="signup">
      <div className="signup__box">
        <h2>Signup</h2>
        <input
          type="text"
          name="name"
          value={account.name}
          onChange={handleChange}
          placeholder="Full Name.."
        />
        <input
          type="text"
          name="email"
          value={account.email}
          onChange={handleChange}
          placeholder="Email Address..."
        />
        <input
          type="text"
          name="password"
          value={account.password}
          onChange={handleChange}
          placeholder="Password..."
        />
        <input
          type="text"
          name="avatar"
          value={account.avatar}
          onChange={handleChange}
          placeholder="Avatar url..."
        />
        <button onClick={handleSubmit}> Signup </button>
        <Link to="/login">Already have Account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
