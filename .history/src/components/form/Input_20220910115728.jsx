import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
function InputForm({
  name,
  label,
  placeholder = "",
  rules = true,
  disabled = false,
  autoFocus = false,
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
    <Form.Item name={name} label={label} rules={RuleObject} {...layout}>
      <Input
        disabled={disabled}
        autoFocus={true}
        placeholder={placeholder}
        bordered={false}
      />
    </Form.Item>
  );
}

export default InputForm;
