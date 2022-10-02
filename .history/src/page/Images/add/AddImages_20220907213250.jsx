import React from "react";
import { Button } from "antd";
import styled from "styled-components";

import UploadForm from "../../../components/form/Upload";
import WrapperMaindash from "../../../components/WrapperMaindash";

const WrapperStyle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 margin-top: 10px;
`;

function AddImages(props) {
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <UploadForm />
      <WrapperStyle>
        <Button type="primary">Thêm hình ảnh</Button>
      </WrapperStyle>
    </WrapperMaindash>
  );
}

export default AddImages;
