import React from "react";
import { Form } from "antd";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

function FormItemForm({ name, label, rules = true, children, ...props }) {
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
      {...layout}
      {...props}
    >
      {children}
    </Form.Item>
  );
}

export default FormItemForm;
