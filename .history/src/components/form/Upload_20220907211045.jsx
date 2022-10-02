import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const App = () => {
  const beforeUpload = (file) => {
    const Image = getBase64(file);
    console.log("Image", Image);
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
