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
    let id = null;
    if (inputRef.current && autoFocus) {
      id = setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
    return () => {
      clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <Form.Item name={name} label={label} rules={RuleObject} {...layout}>
      <Input
        ref={inputRef}
        disabled={disabled}
        placeholder={placeholder}
        bordered={false}
      />
    </Form.Item>
  );
}

export const InputFormPassword = ({
  name,
  label,
  placeholder = "",
  rules = true,
  disabled = false,
  autoFocus = false,
}) => {
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
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <Form.Item name={name} label={label} rules={RuleObject} {...layout}>
      <Input.Password
        ref={inputRef}
        disabled={disabled}
        placeholder={placeholder}
        bordered={false}
      />
    </Form.Item>
  );
};

export default InputForm;
