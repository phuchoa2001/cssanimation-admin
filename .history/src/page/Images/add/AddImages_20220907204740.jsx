import React from "react";
import WrapperMaindash from "../../../components/WrapperMaindash";
import UploadForm from "../../../components/form/Upload";

function AddImages(props) {
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      <UploadForm />
    </WrapperMaindash>
  );
}

export default AddImages;
