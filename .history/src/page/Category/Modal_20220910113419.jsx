import React from "react";
import { Form, Modal } from "antd";
import InputForm from "../../components/form/Input";

function ModalAdd({ isModalOpen, setIsModalOpen, id }) {
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
        <InputForm
          name="name"
          label="Tên"
          placeholder="Nhập tên"
         />
      </Form>
    </Modal>
  );
}

export default ModalAdd;
