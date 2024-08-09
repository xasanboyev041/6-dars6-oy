import axios from "../../api/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = (e) => {
    e.reventDefault();

    axios.post("/auth/login/", { email, password })
      .then((response) => {
      if (response.status === 201) {
        localStorage.setItem("token", response.data.access_token);
        navigate("/profile");
      }
    });
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleUserLogin}>
          <input
            className="login-input"
            type="Email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button-logo" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
