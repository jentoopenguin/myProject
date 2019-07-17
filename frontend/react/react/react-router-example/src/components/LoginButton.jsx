import React from "react";
import { withRouter } from "react-router-dom";

function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>;
}

export default withRouter(LoginButton);
