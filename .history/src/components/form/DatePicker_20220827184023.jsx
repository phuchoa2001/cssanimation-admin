import React from "react";
import moment from "moment";
import { DatePicker } from "antd";

function DatePickerForm(props) {
  const { value, onChange, dateFormat } = props;
  const ValueNew = !!moment(value, dateFormat)._i
    ? moment(value, dateFormat)
    : null;
  return (
    <DatePicker
      {...props}
      placeholder="Chọn ngày sinh"
      onChange={onChange}
      format={dateFormat}
      value={ValueNew}
    />
  );
}

export default DatePickerForm;
