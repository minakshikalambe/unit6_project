import React, { useContext, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate, Link, useParams } from "react-router-dom";
import SignNameContext from "./SignNameContext";
import Footer from "./footer";
import {Navbar} from "./Navbar";
import Signin from "./Signin";
import SignUp from "./SignUp";
import "./login.css";

const clientId ="850036655865-qpett3kjag31j27njvcfpoegsc2otudn.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const { name } = useParams();
  const nav = useNavigate();
  const { userName, setUserName } = useContext(SignNameContext);

  const onLoginSuccess = (res) => {
    // console.log("Login Success:", res.profileObj.email);
    setUserName({
      ...userName,
      email: res.profileObj.email,
      name: res.profileObj.name,
    });
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    nav("/");
  };

  return (
    <>
      <Navbar />
      <div className='mainDiv' border={"1px solid rgb(244,51,151)"}>
        <h2>
          <Link
            to={"/login/signIn"}
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <span>Sign In</span>
          </Link>{" "}
          |{" "}
          <Link
            to={"/login/signOut"}
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <span>Sign Out</span>
          </Link>
        </h2>
        {name === "signOut" ? <SignUp /> : <Signin />}
        <div>
          {showloginButton ? (
            <Link
              to='/'
              style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
            >
              <GoogleLogin
                className='g-login'
                clientId={clientId}
                buttonText='Sign In'
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </Link>
          ) : null}

          {showlogoutButton ? (
            <GoogleLogout
              clientId={clientId}
              buttonText='Sign Out'
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;