import React from "react";
import { useState } from "react";
import FormData from "form-data";
import { Button, Spin } from "antd";
import styled from "styled-components";

import UploadForm from "../../../components/form/Upload";
import WrapperMaindash from "../../../components/WrapperMaindash";
import { IconApi } from "../../../api/iconApi ";
import { useHistory } from "react-router-dom";

const SpinStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const ErrorStyle = styled.span`
  text-align: center;
  color: red;
  display: block;
  margin-top: 20px;
`;

function AddImages(props) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    if (image?.name) {
      var form = new FormData();
      form.append("image", image);
      setLoading(true);
      IconApi.add(form).finally((res) => {
        setLoading(false);
        history.goBack();
      });
    } else {
      setError("Bạn chưa có hình ảnh");
    }
  };
  const handleChangeImage = (file) => {
    setError("");
    setImage(file);
  };
  return (
    <WrapperMaindash title="Thêm hình ảnh">
      {!loading ? (
        <>
          <UploadForm
            value={image}
            onChange={(file) => handleChangeImage(file)}
          />
          <ErrorStyle className="error">{error}</ErrorStyle>
          <WrapperStyle>
            <Button type="primary" onClick={handleClick}>
              Thêm Icon
            </Button>
          </WrapperStyle>
        </>
      ) : (
        <SpinStyles>
          <Spin />
        </SpinStyles>
      )}
    </WrapperMaindash>
  );
}

export default AddImages;
