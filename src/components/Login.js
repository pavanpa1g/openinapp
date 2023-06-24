import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-bg-container">
      <div className="board-container">
        <h3 className="board-heading">Board.</h3>
      </div>
      <div className="right-bg-container">
        <div style={{boxSizing:'border-box'}}>
          <h1 className="sign-head">Sign In</h1>
          <p className="sign-para-text">Sign into your account</p>
          <div className="gmail-button-container">
            <div className="gmail-button">
              <img
                src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1687535069/google-icon_1_s7854l.png"
                alt="logo"
                className="google-logo"
              />
              <p>signin with gmail</p>
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
          <form className="form-bg-container">
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
            <button className="sign-button">Sign In</button>
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
