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
`;

function AddImages(props) {
  const [image, setImage] = useState(null);
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <UploadForm value={image} onChange={(file) => setImage(file)} />
      <span className="error"></span>
      <WrapperStyle>
        <Button type="primary">Thêm hình ảnh</Button>
      </WrapperStyle>
    </WrapperMaindash>
  );
}

export default AddImages;
