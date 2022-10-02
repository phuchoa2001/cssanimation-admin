import React, { useRef } from "react";
import styled from "styled-components";
import { Form } from "antd";

import InputForm from "../../components/form/Input";
import { InputFormPassword } from "../../components/form/Input";

const LoginStyles = styled.div`
  background: #fff;
  padding: 30px 80px;
  border-radius: 8px;
`;

function Login(props) {
  const formElemt = useRef();
  const onFinish = async (values) => {};
  return (
    <LoginStyles>
      <Form
        name="control-hooks"
        onFinish={onFinish}
        className="form"
        ref={formElemt}
      >
        <h3 className="text">Login</h3>
        <InputForm
          name="user"
          autoFocus={true}
          label="Tài khoản"
          placeholder="Nhập tài khoản"
        />
        <InputFormPassword
          name="password"
          label="Mất khẩu"
          placeholder="Nhập mất khẩu"
        />
      </Form>
    </LoginStyles>
  );
}

export default Login;
