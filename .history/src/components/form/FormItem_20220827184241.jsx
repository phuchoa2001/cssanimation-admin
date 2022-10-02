import React from "react";
import { Form } from "antd";

function FormItemForm({ name, label, rules = true, children }) {
  const RuleObject = rules
    ? [
        {
          required: true,
          message: "không để trường này trống",
        },
      ]
    : [];
  return (
    <Form.Item name={name} label={label} rules={RuleObject}>
      {children}
    </Form.Item>
  );
}

export default FormItemForm;
