import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const App = () => {
  const beforeUpload = (file) => {
    console.log("file" , file);
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const img = document.createElement("img");
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = "red";
          ctx.textBaseline = "middle";
          ctx.font = "33px Arial";
          ctx.fillText("Ant Design", 20, 20);
          canvas.toBlob((result) => resolve(result));
        };
      };
    });
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
