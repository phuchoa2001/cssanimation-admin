import React, { useRef, useState } from "react";
import { Form, Button } from "antd";

import WrapperMaindash from "../../../components/WrapperMaindash";
import InputForm from "../../../components/form/Input";
import styled from "styled-components";
import AddImage from "./AddImage";
import AddIcon from "./AddIcon";
import AddCategory from "./AddCategory";

const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 10px 0px;
`;

function AddApp() {
  const formElemt = useRef(null);
  const [otherForm, setOtheForm] = useState({
    image: "",
    icon: "",
    category: [],
  });
  const [otherFormError, setOtheFormError] = useState({
    image: "",
    icon: "",
    category: "",
  });
  const handleChangeImage = (imageObj) => {
    setOtheForm((prev) => ({
      ...prev,
      image: imageObj,
    }));
  };
  const handleChangeIcon = (IconObj) => {
    setOtheForm((prev) => ({
      ...prev,
      icon: IconObj,
    }));
  };
  const handleChangeCategory = (CategoryArr) => {
    setOtheForm((prev) => ({
      ...prev,
      category: CategoryArr,
    }));
  };
  const onFinish = async (data) => {
    if (!!!otherForm.image && !!!otherForm.image) {
      !!!otherForm.image &&
        setOtheFormError((prev) => ({
          ...prev,
          image: "Không bỏ trống trường này",
        }));
      !!!otherForm.icon &&
        setOtheFormError((prev) => ({
          ...prev,
          icon: "Không bỏ trống trường này",
        }));
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
        <AddImage
          value={otherForm.image}
          error={otherFormError.image}
          onChange={handleChangeImage}
        />
        <AddIcon
          value={otherForm.icon}
          error={otherFormError.icon}
          onChange={handleChangeIcon}
        />
        <AddCategory
          value={otherForm.category}
          error={otherFormError.category}
          onChange={handleChangeCategory}
        />
        <WrapperStyle>
          <Button type="primary" htmlType="submit">
            Thêm ứng dụng
          </Button>
        </WrapperStyle>
      </Form>
    </WrapperMaindash>
  );
}

export default AddApp;
