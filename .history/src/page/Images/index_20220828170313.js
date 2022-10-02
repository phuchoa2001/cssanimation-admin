import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';

import TableData from '../../components/TableData';
import { useSearch } from '../../hooks/useSearch';
import { open } from '../../redux/useModal';
import { editOrder } from '../../redux/useOrder';
import WrapperMaindash from '../../components/WrapperMaindash';
function Image(props) {
    const { getColumnSearchProps } = useSearch();
    const Listorder = useSelector(state => state.Order.list);
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            ...getColumnSearchProps('name'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            ...getColumnSearchProps('price'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    const handleAdd = () => {
        dispatch(open({
            type: "Add order"
        }));
    }
    const handleEdit = (selectedRowKeys) => {
        dispatch(open({
            type: "Edit order"
        }));
        dispatch(editOrder(selectedRowKeys[0]));
    }
    const handleDelete = (selectedRowKeys) => {
        dispatch(open({
            type: "Delete order",
            data: selectedRowKeys
        }));
    }
    return (
        <WrapperMaindash title={"Danh Sách hình ảnh"}>
            {Listorder.length > 0 ?
                < TableData columns={columns} data={Listorder}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                /> : <Empty description="Không có dữ liệu" />
            }
        </WrapperMaindash>
    );
}

export default Image;