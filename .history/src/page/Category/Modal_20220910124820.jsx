import React, { useRef, useEffect } from "react";
import { Form, Modal, Button } from "antd";
import styled from "styled-components";

import InputForm from "../../components/form/Input";
import {
  useAddCategory,
  useDitCategory,
  useCategoryId,
} from "./queries/queries";
import { categoryApi } from "../../api/categoryApi";

function ModalAdd({ isModalOpen, setIsModalOpen, id }) {
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
  console.log("data" , data , "isLoading" , isLoading)
  const { mutate: Add } = useAddCategory({});
  const { mutate: Edit } = useDitCategory({});
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
    formElemt.current.setFieldsValue({ name: "" });
  };
  const onFinish = async (values) => {
    id ? Edit({ data: values, id }) : Add(values);
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
