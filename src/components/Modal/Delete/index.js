import React from 'react';

import { Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import { close } from '../../../redux/useModal';
import { deleteOrder } from "../../../redux/useOrder";
import { deleteUser } from '../../../redux/useUsers';
import { addNotification } from '../../../redux/useNotification';
import openNotification from '../../../commons/Notification';
function Delete(props) {
    const StateModal = useSelector(state => state.Modal)
    const visible = StateModal.Modal
    const { type, data } = StateModal;
    console.log(data);
    const dispatch = useDispatch();
    const handleCancel = () => {
        dispatch(close());
    };
    const handleOk = () => {
        const Notification = `Bạn đã xóa ${data.length} phần tử ở phần 
        ${type === "Delete users" ? "Users" : "Order"}`
            ;
        dispatch(close());
        dispatch(addNotification(Notification))
        openNotification(Notification);
        if (type === "Delete users") {
            dispatch(deleteUser(data));
        } else {
            dispatch(deleteOrder(data));
        }
    };
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
                <p>Bạn có muốn xóa {data.length} phần tử này không</p>
            </Modal>
        </>
    );
}

export default Delete;