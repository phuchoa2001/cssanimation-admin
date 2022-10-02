import React, { useRef, useState } from "react";
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
  const [value, setValue] = useState("");
  const [children, setChildren] = useState(options);
  const handleSearch = (text) => {
    if (text) {
      const searchArr = options.filter((item) => item.label.indexOf(text) > -1);
      console.log("searchArr" , searchArr);
      setChildren(searchArr);
    } else {
      setChildren(options);
    }
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
          value={value}
          children={children}
          boxnotHidden={
            <div className="page">
              <Pagination simple defaultCurrent={1} total={50} />
            </div>
          }
          onSearch={handleSearch}
          onClick={(value) => setValue(value)}
        />
      </Form>
    </WrapperMaindash>
  );
}

export default AddApp;
