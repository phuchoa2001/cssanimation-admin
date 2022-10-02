import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { Image } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

const UploadStyles = styled.div`
  
`

const UploadStyle = styled(Upload)`
  .BoxImage {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    cursor: pointer;
  }
`;

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
    <UploadStyles >
      <ImgCrop modalWidth={500} quality={1}>
        <UploadStyle beforeUpload={beforeUpload} maxCount={1}>
          {base64 ? (
            <Image width={500} src={base64} preview={false} />
          ) : (
            <div className="BoxImage">
              <PlusOutlined />
            </div>
          )}
        </UploadStyle>
      </ImgCrop>
    </UploadStyles>
  );
};

export default UploadForm;
