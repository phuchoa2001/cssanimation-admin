import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

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
      />
    </Form.Item>
  );
}

export default TextAreaForm;
