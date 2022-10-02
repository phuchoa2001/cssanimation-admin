import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';

import TableData from '../../components/TableData';
import { useSearch } from '../../hooks/useSearch';
import { open } from '../../redux/useModal';
import { editOrder } from '../../redux/useOrder';
function Order(props) {
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
        <div className='wrapperMaindash'>
            <h1 className="heading-text--large">Danh Sách Order</h1>
            {Listorder.length > 0 ?
                < TableData columns={columns} data={Listorder}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                /> : <Empty description="Không có dữ liệu" />
            }
        </div>
    );
}

export default Order;