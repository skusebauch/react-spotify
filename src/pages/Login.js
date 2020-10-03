import React, { useEffect } from "react";
import "./Login.css";
import Logo from "../assets/Logo/logo.png";
import { loginUrl } from "../spotify";
import { getTokenFromUrl } from "../spotify";

function Login() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I have a token >>>", token);
  }, []);

  return (
    <div className="login">
      <img src={Logo} alt="logo" />
      <a href={loginUrl}>login with spotify</a>
    </div>
  );
}

export default Login;
