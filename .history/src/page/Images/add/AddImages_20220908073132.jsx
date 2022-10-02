import React from "react";
import { Button } from "antd";
import styled from "styled-components";

import UploadForm from "../../../components/form/Upload";
import WrapperMaindash from "../../../components/WrapperMaindash";
import { useState } from "react";

const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  .error {
    text-align: center;
    color: red;
  }
`;

function AddImages(props) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleClick = () => {
    console.log(image);
    if (image?.name) {
    } else {
      setError("Bạn chưa có hình ảnh");
    }
  };
  const handleChangeImage = (file) => {
    setError("")
    setImage(file)
  }
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <UploadForm value={image} onChange={(file) => handleChangeImage(file)} />
      <span className="error">{error}</span>
      <WrapperStyle>
        <Button type="primary" onClick={handleClick}>
          Thêm hình ảnh
        </Button>
      </WrapperStyle>
    </WrapperMaindash>
  );
}

export default AddImages;
