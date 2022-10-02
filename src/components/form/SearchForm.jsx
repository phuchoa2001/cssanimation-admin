import { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Space } from 'antd';

import  ButtonStyle  from 'components/ButtonStyle';

const SearchFormStyles = styled.div`
  margin-bottom: 15px;

  .ant-input {
    min-height: 40px;
    width: 200px;
    border-radius: 8px;
  }

  .ant-btn {
    text-transform: none;
  }
`;

export const SearchForm = ({ children, initialValues, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = props.form || Form.useForm()[0];

  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
      type_id: initialValues.type_id ? initialValues.type_id : null,
    });
  }, [form, initialValues]);

  const handleReset = () => {
    form.resetFields();
    form.submit();
  };

  return (
    <SearchFormStyles>
      <Form layout="inline" {...props} form={form}>
        {children}

        <Space style={{ marginLeft: 'auto' }}>
          <ButtonStyle htmlType="submit" type="dark">
            Search
          </ButtonStyle>
          <ButtonStyle onClick={handleReset} type="cancel">
            Reset
          </ButtonStyle>
        </Space>
      </Form>
    </SearchFormStyles>
  );
};
