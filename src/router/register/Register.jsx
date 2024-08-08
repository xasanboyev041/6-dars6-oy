import axios from "../../api/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleUserRegister = (e) => {
    e.preventDefault();
    axios.post("/users", { name, email, password, avatar }).then((response) => {
      if (response.status === 201) {
        alert("User create successefully");
        navigate("/login");
      }
    });
  };
  return (
    <div>
      <div className="register-container">
        <form className="register-form" onSubmit={handleUserRegister}>
          <input className="register-input"
            type="text"
            placeholder="Enter your name.."
            onChange={(e) => setName(e.target.value)}
          />
          <input className="register-input"
            type="Email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="register-input"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="register-input"
            type="url"
            placeholder="Enter your avatar url "
            onChange={(e) => setAvatar(e.target.value)}
          />
          <button className="button-register" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
