import { Button, Result } from 'antd';

const Link404 = () => (
    <Result
        status="404"
        title="404"
        subTitle="xin lỗi không có trang này"
        extra={<Button type="primary">Back Home</Button>}
    />
);
export default Link404;