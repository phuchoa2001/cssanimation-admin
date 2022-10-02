import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { Image } from "antd";
import { useState } from "react";
import styled from "styled-components";

const UploadStyle = styled(Upload)``;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadForm = () => {
  const [base64, setBase64] = useState();
  const beforeUpload = async (file) => {
    const Image = await getBase64(file);
    console.log("Image", Image);
    setBase64(Image);
  };

  return (
    <ImgCrop modalWidth={500} quality={1}>
      <UploadStyle beforeUpload={beforeUpload} maxCount={1}>
        {base64 ? (
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        ) : (
          <div className="BoxImage">Upload</div>
        )}
      </UploadStyle>
    </ImgCrop>
  );
};

export default UploadForm;
