import React, { useRef } from "react";
import Form from "antd/lib/form/Form";

import WrapperMaindash from "../../../components/WrapperMaindash";

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
      ></Form>
      <div>Page AddApp</div>
    </WrapperMaindash>
  );
}

export default AddApp;
