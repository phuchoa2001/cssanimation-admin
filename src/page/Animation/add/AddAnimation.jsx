import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Spin } from "antd";
import { useParams } from "react-router-dom";

import cssbeautify from "cssbeautify";
import { useHistory } from "react-router-dom";
import pretty from "pretty";

import WrapperMaindash from "../../../components/WrapperMaindash";
import InputForm from "../../../components/form/Input";
import styled from "styled-components";
import AddCategory from "./AddCategory";

import Item from "../../../components/Item/Item";

import { animationApi } from "../../../api/animationApi";

import Permission from "../../../components/permission/Permission";
import TextAreaForm from "../../../components/form/TextArea";

const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 10px 0px;
`;

function AddApp() {
  const formElemt = useRef(null);
  const [form] = Form.useForm();
  const history = useHistory();
  const { id } = useParams();
  const [isloading, setIsloading] = useState(false);
  const [otherForm, setOtheForm] = useState({
    category: [],
  });
  const [otherFormError, setOtheFormError] = useState({
    category: "",
  });

  const SetError = (key, text) => {
    setOtheFormError((prev) => ({
      ...prev,
      [key]: "Không để trống trường này",
    }));
  };
  async function fetchApi(id) {
    const { data } = await animationApi.getId(id);
    data.css = cssbeautify(data.css);
    data.html = pretty(data.html);
    form.setFieldsValue({ ...data });
    setOtheForm({ ...data });
    setIsloading(false);
  }

  useEffect(() => {
    setIsloading(true);
    if (id) {
      fetchApi(id);
    } else {
      setIsloading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChangeCategory = (CategoryArr) => {
    setOtheForm((prev) => ({
      ...prev,
      category: CategoryArr,
    }));
    setOtheFormError("category", "");
  };
  const handleFormathtml = () => {
    form.setFieldsValue({ html: pretty(form.getFieldValue("html")) });
  };
  const handleFormatcss = () => {
    form.setFieldsValue({ css: cssbeautify(form.getFieldValue("css")) });
  };

  const onFinish = async (values) => {
    if (!!!otherForm.category.length) {
      SetError("category", "Không để trống trường này");
    } else {
      const newData = {
        ...values,
        category: otherForm.category.reduce(
          (initialValue, currentValue) => [
            ...initialValue,
            currentValue["_id"],
          ],
          []
        ),
      };
      id
        ? await animationApi.patch({ data: newData, id })
        : await animationApi.add(newData);
      history.goBack();
    }
  };

  return (
    <WrapperMaindash title={id ? "Sửa Animation" : "Thêm Animation"}>
      {!isloading ? (
        <Form
          ref={formElemt}
          name="control-hooks"
          onFinish={onFinish}
          className="form"
          initialValues={{ goverment: false }}
          form={form}
        >
          <Form.Item shouldUpdate>
            {(values) => {
              return (
                <Item
                  html={values.getFieldValue("html")}
                  css={values.getFieldValue("css")}
                  title={values.getFieldValue("title")}
                />
              );
            }}
          </Form.Item>
          <InputForm name="title" label="Tiêu đề" placeholder="Nhập tiêu đề" />
          <Button
            type="primary"
            htmlType="button"
            style={{ marginBottom: 10 }}
            onClick={handleFormathtml}
          >
            Format Html
          </Button>
          <TextAreaForm name="html" label="Html" placeholder="Nhập html" />
          <Button
            type="primary"
            htmlType="button"
            style={{ marginBottom: 10 }}
            onClick={handleFormatcss}
          >
            Format Css
          </Button>
          <TextAreaForm name="css" label="css" placeholder="Nhập css" />
          <AddCategory
            value={otherForm.category}
            error={otherFormError.category}
            onChange={handleChangeCategory}
          />
          <Permission roles={["ADMIN"]} noAccess={null}>
            <WrapperStyle>
              <Button type="primary" htmlType="submit">
                {id ? "Sửa Animation" : "Thêm Animation"}
              </Button>
            </WrapperStyle>
          </Permission>
        </Form>
      ) : (
        <Spin />
      )}
    </WrapperMaindash>
  );
}

export default AddApp;
