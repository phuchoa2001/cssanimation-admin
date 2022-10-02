import React, { useRef, useEffect } from "react";
import { Form, Modal, Button } from "antd";
import styled from "styled-components";

import InputForm from "../../components/form/Input";
import { useAddCategory, useDitCategory } from "./queries/queries";
import { categoryApi } from "../../api/categoryApi";

function ModalAdd({ isModalOpen, setIsModalOpen, id }) {
  const formElemt = useRef();
  const { mutate: Add } = useAddCategory({});
  const { mutate: Edit } = useDitCategory({});
  const WrapperStyle = styled.div`
    display: flex;
    justify-content: right;
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
  const resetForm = () => {
    formElemt.current.setFieldsValue({ name: "" });
  };
  const onFinish = async (values) => {
    id ? Edit(values, id) : Add(values);
    setIsModalOpen(false);
    resetForm();
  };
  async function fetchKeyWord(id) {
    const { data } = await categoryApi.getId(id);
    formElemt.current.setFieldsValue({ ...data });
  }
  useEffect(() => {
    if (id) {
      fetchKeyWord(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Modal
      title="Thêm thể loại"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      autoFocus={false}
    >
      <Form
        name="control-hooks"
        onFinish={onFinish}
        className="form"
        ref={formElemt}
      >
        {isModalOpen && (
          <InputForm
            name="name"
            autoFocus={true}
            label="Tên"
            placeholder="Nhập tên"
          />
        )}
        <WrapperStyle>
          <Button type="primary" htmlType="submit">
            Thêm thể loại
          </Button>
        </WrapperStyle>
      </Form>
    </Modal>
  );
}

export default ModalAdd;
