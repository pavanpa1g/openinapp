import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from "js-cookie";

import "./login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [signInLoading,setSignInLoading] = useState(false)

  const [errorMsg, setErrorMsg] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();
  const jwttoken = Cookies.get("jwt_token");


  const notify = () =>{
    toast.success('Successfully signed up!', {
      position: toast.POSITION.TOP_CENTER
    });
  }

  const setCookies = (token) => {

    Cookies.set("jwt_token", token, { expires: 30, path: "/" });
    navigate("/");
  };

  useEffect(() => {
    if (jwttoken !== undefined) {
      navigate("/");
    }
  }, [jwttoken, navigate]);



  const onLogin = async (event) => {
    event.preventDefault();
    setIsErrorVisible(false);
    setSignInLoading(true)




    if (isSignUp) {
      try {
        const url = "https://open-inapp-new-backend.vercel.app/signup";
        const userData = {
          name,
          email,
          password,
        };

        const payload = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        };
        const response = await fetch(url, payload);
        const data = await response.json();

        if (response.ok === true) {
          console.log("data", data);
          notify()
          setIsSignUp(false);
          setEmail("")
          setPassword("")
          setName("")
        } else {
          setIsErrorVisible(true);
          setErrorMsg(data.message);
          console.log("error");
        }

      } catch (error) {
        console.log("error", error);
      }
      setSignInLoading(false)
    } else {
      try {
        const url = "https://open-inapp-new-backend.vercel.app/login";
        const userData = {
          email,
          password,
        };
        console.log(userData);
        const payload = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        };
        const response = await fetch(url, payload);
        console.log("login response", response);
        const data = await response.json();
        if (response.ok === true) {

          setCookies(data.token);
          setEmail("")
          setPassword("")
          setName("")
        } else {
          setIsErrorVisible(true);
          setErrorMsg(data.message);
          console.log("error in the response", response);
        }

      } catch (error) {
        console.log("error", error);
      }
      setSignInLoading(false)
    }
  };

  return (
    <div className="login-bg-container">
      <div className="board-container">
        <h3 className="board-heading">Board.</h3>
      </div>
      <div className="right-bg-container">
      <ToastContainer />
        <div className="inner-container">
          <h1 className="sign-head">{isSignUp ? "Sign Up" : "Sign In"}</h1>
          <p className="sign-para-text">
            {isSignUp ? "Sign Up new account" : "Sign into your account"}
          </p>

          <div className="gmail-button-container">
            <div className="google-button">
              <LoginSocialGoogle
                client_id={
                  "405179169353-nr3ciai67bnetlaaj49kcnjnjn7273u5.apps.googleusercontent.com"
                }
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="online"
                onResolve={({ provider, data }) => {
                  setCookies(data.access_token);
                  console.log(provider, "pavan", data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <GoogleLoginButton />
              </LoginSocialGoogle>
            </div>
            <div className="gmail-button">
              <img
                src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687535184/apple_1_hhnfmk.png"
                alt="logo"
                className="google-logo"
              />
              <p>sign with apple</p>
            </div>
          </div>
          <form className="form-bg-container" onSubmit={onLogin}>
            {isSignUp && (
              <>
                <label htmlFor="email" className="label-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Enter Name"
                  className="input-field"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </>
            )}
            <label htmlFor="email" className="label-text">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="pavankumar@gmail.com"
              className="input-field"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="password" className="label-text pass-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="pavan2023"
              className="input-field"
              required
            />
            {!isSignUp && <p className="forgot-text">Forgot password?</p>}

            <button className="sign-button" type="submit">
              {isSignUp ? "Sign Up" : "Sign In"}{signInLoading && "..."  }
            </button>
            {isErrorVisible && <p className="error-message">*{errorMsg}</p>}
          </form>
          <p className="register-para">
            {!isSignUp ? "Don’t have an account" : "Already have an account"}?{" "}
            <span
              className="link-text"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setIsErrorVisible(false);
              }}
            >
              {isSignUp ? "Login" : "Register here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
