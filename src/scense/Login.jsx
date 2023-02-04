import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./Login.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useNavigate } from "react-router-dom";
// import teamDataList from "../scense/team"

const LoginForm = () => {
  useEffect(() => {});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Login() {
    try {
      await fetch("https://localhost:7229/api/Security/LoginV1", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          user_name: email,
          password: password,
          latitude: "23.3232",
          longitude: "90.76765",
          device_id: "W-hhb545",
          server_name: "Hello",
          ip_address: "123.3.32.435",
        }),
      }).then((response) => response.json())
        .then((data) => {
          if (data.is_Authenticated === true) {
            sessionStorage.setItem("role", JSON.stringify(data.accessed_role));
            sessionStorage.setItem("right_id", JSON.stringify(data.right_id));
            sessionStorage.setItem("session_token",data.session_token);
            sessionStorage.setItem("user_id", JSON.stringify(data.userId));
            sessionStorage.setItem("team_id", JSON.stringify(data.teamId));

            navigate("/dashboard");

          } else {
            navigate("/login");
            document.getElementById("errMsg").append(data.auth_message);
          }
          window.location.reload(true);
        });
    } catch {
      console.log("Something went wrong!");
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login-container-wrapper clearfix">
          <div className="logo">
            <img src="/logo192.png" alt="Logo" />
          </div>
          <div className="welcome">
            <strong>Welcome,</strong> please login
          </div>

          <div className="form-horizontal login-form">
            <div className="form-group relative">
              <input
                type="text"
                placeholder="User Name"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control input-lg"
                id="login_username"
                required
              />
              <i className="fa fa-user" />
            </div>
            <br />
            <div className="form-group relative">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control input-lg"
                id="login_password"
                required
              />
              <i className="fa fa-lock" />
            </div>
            <br />
            <div className="form-group">
              <button
                onClick={Login}
                className="btn btn-success btn-lg btn-block"
              >
                Sign In
              </button>
            </div>
            <div>
              <br />
              <p id="errMsg"></p>
            </div>
            <div className="checkbox pull-left">
              <label>
                <input type="checkbox" /> Remember
              </label>
            </div>
            <div className="checkbox pull-right">
              <label>
                {" "}
                <a href="http://">Forgot your password?</a>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
