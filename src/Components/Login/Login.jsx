import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: "archideya77",
    password: "14042002",
  };

  const params = {
    username: username,
    password: password,
  };

  const navigate = useNavigate();

  const useAuth = (params) => {
    return user.username === params.username &&
      user.password === params.password
      ? navigate("profile")
      : toast.error("Incorrect username or password.");
  };

  return (
    <>
      <section className="login-page">
        <div className="login">
          <div className="container">
            <div className="text-center">
              <i className="fab fa-github icon"></i>
              <p className="sign-text">Sign in to GitHub</p>
            </div>
            <form className="form">
              <p className="username-text">Username or email address</p>
              <div>
                <input
                  className="user-input form-control"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="pass-text">Password</p>
                <a className="forgot" href="#">
                  Forgot password?
                </a>
              </div>
              <div>
                <input
                  className="password-input form-control"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="sign-btn" onClick={() => useAuth(params)}>
                Sign in
              </button>
            </form>
            <div className="new-github">
              <div className="d-flex">
                <p className="new">New to GitHub?</p>
                <a className="create" href="#">
                  Create an account <span className="text-white">.</span>
                </a>
              </div>
            </div>
            <ul
              className="d-flex align-items-center justify-content-between list
          "
            >
              <li>
                <a className="links" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="links" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="links" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="links active" href="#">
                  Contact GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </>
  );
};

export default Login;
