import React from "react";
import { Form, Modal , Button } from "antd";
import styled from "styled-components";

import InputForm from "../../components/form/Input";

function ModalAdd({ isModalOpen, setIsModalOpen, id }) {
  const WrapperStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  `;
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (value) => {};
  return (
    <Modal
      title="Thêm thể loại"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form name="control-hooks" onFinish={onFinish} className="form">
        <InputForm name="name" label="Tên" placeholder="Nhập tên" />
        <WrapperStyle>
          <Button type="primary">
            Thêm hình ảnh
          </Button>
        </WrapperStyle>
      </Form>
    </Modal>
  );
}

export default ModalAdd;
