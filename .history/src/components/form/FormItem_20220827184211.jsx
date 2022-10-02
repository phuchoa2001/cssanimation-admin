import React from "react";
import { useIntl } from "react-intl";
import { Form } from "antd";

function FormItemForm({ name, label, rules = true, children }) {
  const intl = useIntl();

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
      {children}
    </Form.Item>
  );
}

export default FormItemForm;
