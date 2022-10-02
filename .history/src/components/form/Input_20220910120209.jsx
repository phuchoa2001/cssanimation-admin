import React, { useEffect, useRef } from "react";
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
  const inputRef = useRef(null);
  const RuleObject = rules
    ? [
        {
          required: true,
          message: "không để trường này trống",
        },
      ]
    : [];
  useEffect(() => {
    if (inputRef.current && autoFocus) {
      console.log("inputRef.current ", inputRef.current);
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <Form.Item name={name} label={label} rules={RuleObject} {...layout}>
      <Input
        ref={inputRef}
        disabled={disabled}
        autoFocus={true}
        placeholder={placeholder}
        bordered={false}
      />
    </Form.Item>
  );
}

export default InputForm;
