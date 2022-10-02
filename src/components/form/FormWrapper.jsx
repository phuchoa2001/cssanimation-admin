import styled from 'styled-components';
import { Form } from 'antd';

const FormWrapperElement = styled(Form)``;

export const FormWrapper = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = props.form || Form.useForm()[0];

  return <FormWrapperElement layout="vertical" {...props} form={form} />;
};
