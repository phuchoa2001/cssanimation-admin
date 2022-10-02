import React from "react";
import { Modal } from "antd";

function ModalAdd({ isModalOpen, setIsModalOpen, id }) {
  console.log("isModalOpen, setIsModalOpen", isModalOpen);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default ModalAdd;
