import React, { useRef } from "react";
import { Form, Modal, Button, Spin } from "antd";
import styled from "styled-components";

import InputForm from "../../components/form/Input";
import {
  useAddCategory,
  useDitCategory,
  useCategoryId,
} from "./queries/queries";

function ModalAdd({ isModalOpen, setIsModalOpen, id , setId }) {
  const formElemt = useRef();
  const argument = {
    params: {
      id: id || null,
    },
    options: {
      keepPreviousData: true,
    },
  };
  const { data, isLoading } = useCategoryId(argument);
  const { mutate: Add } = useAddCategory({});
  const { mutate: Edit } = useDitCategory({});
  console.log("data" , data);
  const WrapperStyle = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  `;

  const handleCancel = () => {
    resetForm();
  };
  const resetForm = () => {
    setIsModalOpen(false);
    setId(null)
    formElemt.current.setFieldsValue({ name: "" });
  };
  const onFinish = async (values) => {
    id ? Edit({ data: values, id }) : Add(values);
    resetForm();
  };
  return (
    <Modal
      title="Thêm thể loại"
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      autoFocus={false}
    >
      {!isLoading ? (
        <Form
          name="control-hooks"
          onFinish={onFinish}
          className="form"
          ref={formElemt}
          initialValues={data?.data || {}}
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
      ) : (
        <Spin />
      )}
    </Modal>
  );
}

export default ModalAdd;
