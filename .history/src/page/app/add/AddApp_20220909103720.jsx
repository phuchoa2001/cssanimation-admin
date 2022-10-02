import React, { useRef } from "react";
import { Pagination, Form } from "antd";

import WrapperMaindash from "../../../components/WrapperMaindash";
import SelectPageSize from "../../../components/form/SelectPageSize";
import InputForm from "../../../components/form/Input";

const options = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

function AddApp() {
  const formElemt = useRef(null);
  const onFinish = async (data) => {};
  const handleSearch = () => {};
  const handlePage = () => {};
  const handleClick = (value) => {
    console.log("value" , value)
  };
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
        <InputForm
          name="github"
          label="Đường dẫn đến Github"
          placeholder="Nhập đường dẫn đến Github"
        />
        <SelectPageSize
          value={[]}
          children={options}
          boxnotHidden={
            <div className="page">
              <Pagination simple defaultCurrent={1} total={50} />
            </div>
          }
          onSearch={handleSearch}
          onClick={handleClick}
        />
      </Form>
    </WrapperMaindash>
  );
}

export default AddApp;
