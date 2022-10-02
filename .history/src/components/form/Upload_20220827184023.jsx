import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Image } from "antd";

const UploadForm = ({ value, onChange, disabled = false }) => {
  const handleBeforeUpload = (file) => {
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const reader = new FileReader();
      reader.addEventListener("loadstart", () => {
        // setIsLoading(true);
      });
      reader.addEventListener("load", () => {
        onChange(reader.result);
      });

      reader.addEventListener("loadend", () => {
        // setIsLoading(false);
      });

      reader.readAsDataURL(file);
    } else {
      Notification("error", "File không đúng định dạng, xin vui lòng thử lại");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  return (  
    <Upload
      disabled={disabled}
      name="avatar"
      listType="picture-card"
      className="avatar-uploader upload-list-inline"
      accept=".jpeg, .png, .jpg"
      showUploadList={false}
      beforeUpload={handleBeforeUpload}
    >
      {value ? (
        <Image
          accept="image/png, image/gif, image/jpeg"
          src={value}
          preview={false}
          style={{ width: 80, height: 80 }}
        />
      ) : (
        <PlusOutlined style={{ maxWidth: "100%" }} />
      )}
    </Upload>
  );
};

export default UploadForm;
