import React from "react";
import "./css/LoginArea.css";
import LoginBox from "./LoginBox";

function LoginArea(props) {
  const { auth } = props;

  return (
    <div className="login-box">
      <h1>WELCOME</h1>
      <LoginBox auth={auth} />
    </div>
  );
}

export default LoginArea;
