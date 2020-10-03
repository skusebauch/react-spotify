import React from "react";
import "./Login.css";
import Logo from "../assets/Logo/logo.png";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="logo" />
      <a href={loginUrl}>login with spotify</a>
    </div>
  );
}

export default Login;
