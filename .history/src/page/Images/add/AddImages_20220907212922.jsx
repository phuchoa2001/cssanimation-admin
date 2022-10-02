import React from "react";
import WrapperMaindash from "../../../components/WrapperMaindash";
import { Button } from "antd";
import UploadForm from "../../../components/form/Upload";

function AddImages(props) {
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <UploadForm />
      <Button type="primary">Thêm hình ảnh</Button>
    </WrapperMaindash>
  );
}

export default AddImages;
