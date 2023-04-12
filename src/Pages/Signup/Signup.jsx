import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userRegistered } from "../../store/users";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const Signup = () => {
  const loading = useSelector((state) => state.entities.users.loading);
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

  const token = useSelector((state) => state.entities.users.jwt);

  useEffect(() => {
    if (token) {
      toast.success("Account created :)");
      setTimeout(() => (window.location = "/"), 1500);
    }
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
        <button onClick={handleSubmit}>
          {loading ? <Loading /> : "Signup"}
        </button>
        <Link to="/login">Already have Account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
