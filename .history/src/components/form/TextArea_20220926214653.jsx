import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

function TextAreaForm({
  name,
  label,
  placeholder = "",
  rules = true,
  disabled = false,
}) {

  const RuleObject = rules
    ? [
        {
          required: true,
          message: "không để trường này trống",
        },
      ]
    : [];
  return (
    <Form.Item
      name={name}
      label={label}
      rules={RuleObject}
    >
      <TextArea
        placeholder={placeholder}
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
        disabled={disabled}
        bordered={false}
      />
    </Form.Item>
  );
}

export default TextAreaForm;
