import React from "react";
import WrapperMaindash from "../../../components/WrapperMaindash";
import { Button } from "antd";
import UploadForm from "../../../components/form/Upload";

function AddImages(props) {
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <UploadForm />
      <Button type="primary">Submit</Button>
    </WrapperMaindash>
  );
}

export default AddImages;
