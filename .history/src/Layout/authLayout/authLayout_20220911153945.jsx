import React from "react";
import styled from "styled-components";

import Login from "../../page/login/Login";

const LoginStyles = styled.div``;
function AuthLayout() {
  return (
    <div className="App">
      <LoginStyles>
        <Login />
      </LoginStyles>
    </div>
  );
}

export default AuthLayout;
