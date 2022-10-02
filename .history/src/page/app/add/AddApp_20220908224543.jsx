import React, { useRef } from "react";
import Form from "antd/lib/form/Form";

import WrapperMaindash from "../../../components/WrapperMaindash";
import InputForm from "../../../components/form/Input";

function AddApp() {
  const formElemt = useRef(null);
  const onFinish = async (data) => {};

  return (
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
      </Form>
    </WrapperMaindash>
  );
}

export default AddApp;
