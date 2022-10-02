import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const App = () => {
  const [base64 , setBase64] = useState();
  const beforeUpload = async (file) => {
    const Image = await getBase64(file);
    console.log("Image", Image);
    setBase64(Image);
  };

  return (
    <ImgCrop modalWidth={500} quality={1}>
      <Upload listType="picture-card" beforeUpload={beforeUpload} maxCount={1}>
        {"+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default App;
