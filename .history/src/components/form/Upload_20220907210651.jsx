import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const App = () => {
  const onPreview = async (file) => {
    console.log("file", file);
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop modalWidth={500} quality={1}>
      <Upload
        listType="picture-card"
        onPreview={onPreview}
        maxCount={1}
      ></Upload>
    </ImgCrop>
  );
};

export default App;
