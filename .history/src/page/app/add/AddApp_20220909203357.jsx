import React, { useRef } from "react";
import { Form } from "antd";

import WrapperMaindash from "../../../components/WrapperMaindash";
import InputForm from "../../../components/form/Input";
import styled from "styled-components";
import AddImage from "./AddImage";

const AppStyles = styled.div`
  .scroll {
    padding: 10px 0px;
  }
`;

function AddApp() {
  const formElemt = useRef(null);
  const onFinish = async (data) => {};

  return (
    <AppStyles>
      <WrapperMaindash title="Thêm ứng dụng">
        <Form
          ref={formElemt}
          name="control-hooks"
          onFinish={onFinish}
          className="form"
        >
          <InputForm
            name="name"
            label="Tên ứng dụng"
            placeholder="Nhập tên ứng dụng"
          />
          <InputForm
            name="url"
            label="Đường dẫn đến ứng dụng"
            placeholder="Nhập đường dẫn đến ứng dụng"
          />
          <InputForm
            name="github"
            label="Đường dẫn đến Github"
            placeholder="Nhập đường dẫn đến Github"
          />
          <AddImage />
        </Form>
      </WrapperMaindash>
    </AppStyles>
  );
}

export default AddApp;
