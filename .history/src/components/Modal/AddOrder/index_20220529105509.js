import React, { useEffect, useRef } from 'react';

import { Form, Input } from 'antd';
import { Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../redux/useModal';
import { addOrder } from '../../../redux/useOrder';
import { addNotification } from '../../../redux/useNotification';
import Styles from './index.module.css';

import openNotification from '../../../commons/Notification';

function AddOrder(props) {
    const StateModal = useSelector(state => state.Modal)
    const visible = StateModal.Modal
    const { type } = StateModal;
    const dispatch = useDispatch();
    const name = useRef();
    const formElemt = useRef();
    const order = useSelector(state => state.Order.order);
    const handleCancel = () => {
        dispatch(close());
    };
    const handleOk = () => {
        handleSubmit();
    };
    const [form] = Form.useForm();
    const objectForm = {
        key: Form.useWatch('key', form) || order.key,
        name: Form.useWatch('name', form) || "",
        price: Form.useWatch('price', form) || "",
        address: Form.useWatch('address', form) || ""
    }
    const handleSubmit = () => {
        //  bắt có lỗi không nếu không chúng ta thêm 
        const ListError = formElemt.current.getFieldsError();
        const LengthError = ListError.filter((error) => error.errors.length > 0);
        if (!LengthError.length &&
            objectForm.name !== "" &&
            objectForm.price !== "" &&
            objectForm.address !== ""
        ) {
            const Notification = `${objectForm.name} đã ${type === "Add order" ? "thêm" : "sửa"} vào phần order`;
            dispatch(addOrder(objectForm));
            dispatch(close());
            dispatch(addNotification(Notification))
            openNotification(Notification);
        } else {
            openNotification("Form có lỗi !");
        }
    }
    useEffect(() => {
        name.current.focus();
        formElemt.current.setFieldsValue(order);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Modal
                title={type}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Thêm"
                cancelText="Hủy bỏ"
            >
                <h3 className={Styles.title}>{type === "Add order" ? "Thêm sản phẩm" : "Sửa sản phẩm"}</h3>
                <Form
                    className={Styles.form}
                    onFinish={handleSubmit}
                    form={form}
                    ref={formElemt}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        label="Tên sản phẩm"
                        tooltip="Hãy nhập tên tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này !',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập tên tại đây !" ref={name} />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="giá sản phẩm"
                        tooltip="Hãy nhập giá tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này !',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập giá tại đây" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Địa chỉ sản phẩm"
                        tooltip="Hãy nhập địa chỉ tại đây !"
                        rules={[
                            {
                                required: true,
                                message: 'Không thể bỏ trống trường này !',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Hãy nhập địa chỉ tại đây" />
                    </Form.Item>
                    <button type="submit" className={Styles.btnSubmit}></button>
                </Form>
            </Modal>
        </>
    );
}

export default AddOrder;