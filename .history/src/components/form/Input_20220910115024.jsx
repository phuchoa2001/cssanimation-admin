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
    console.log(inputRef.current)
    if(inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef?.current]);
  return (
    <Form.Item name={name} label={label} rules={RuleObject} {...layout}>
      <Input disabled={disabled} placeholder={placeholder} bordered={false} />
    </Form.Item>
  );
}

export default InputForm;
