import React from "react";
import WrapperMaindash from "../../components/WrapperMaindash";
import { Upload } from "antd";

function AddImages(props) {
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <Upload />
    </WrapperMaindash>
  );
}

export default AddImages;
