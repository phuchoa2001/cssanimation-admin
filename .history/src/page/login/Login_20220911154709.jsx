import React, { useRef } from "react";
import styled from "styled-components";
import { Form } from "antd";

import InputForm from "../../components/form/Input";

const LoginStyles = styled.div``;

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
        <InputForm
          name="user"
          autoFocus={true}
          label="Tài khoản"
          placeholder="Nhập tên"
        />
        <InputForm
          name="password"
          label="Mất khẩu"
          placeholder="Nhập mất khẩu"
        />
      </Form>
    </LoginStyles>
  );
}

export default Login;
