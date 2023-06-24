import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

import Cookies from "js-cookie";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const jwttoken = Cookies.get("jwt_token")

  const setCookies =(data)=>{
    const {token} = data 
    Cookies.set('jwt_token',token,{expires:30,path:'/'})
    navigate('/')
  }


  useEffect(()=>{
    if (jwttoken !== undefined){
      navigate('/')
    }
  },[])

  const onLogin = (event) => {
    event.preventDefault();
    console.log("clicked");
    navigate("/");
  };

  return (
    <div className="login-bg-container">
      <div className="board-container">
        <h3 className="board-heading">Board.</h3>
      </div>
      <div className="right-bg-container">
        <div style={{ boxSizing: "border-box" }}>
          <h1 className="sign-head">Sign In</h1>
          <p className="sign-para-text">Sign into your account</p>



          <div className="gmail-button-container">
            {/* <div className="gmail-button" onClick={() => console.log("")}>
              <img
                src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687535069/google-icon_1_s7854l.png"
                alt="logo"
                className="google-logo"
              />
              <p>signin with gmail</p>
            </div> */}

<LoginSocialGoogle
            client_id={"405179169353-cd4qo82b09dbqdlb16mvmemp9g2a59d8.apps.googleusercontent.com"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
              setCookies(data)
              console.log(provider,"pavan", data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
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
            <label htmlFor="email" className="label-text">
              Email address
            </label>
            <input
              type="email"
              i="email"
              placeholder="Email address"
              className="input-field"
            />
            <label htmlFor="password" className="label-text pass-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <p className="forgot-text">Forgot password?</p>
            <button className="sign-button" type="submit">
              Sign In
            </button>
          </form>
          <p className="register-para">
            Don’t have an account?{" "}
            <span className="link-text">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
