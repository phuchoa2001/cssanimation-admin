import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';

import TableData from '../../components/TableData';
import { useSearch } from '../../hooks/useSearch';
import { open } from '../../redux/useModal';
import { editUser } from '../../redux/useUsers';
function Users(props) {
    const { getColumnSearchProps } = useSearch();
    const ListUsers = useSelector(state => state.Users.list);
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Tài khoản',
            dataIndex: 'username',
            ...getColumnSearchProps('username'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mất khẩu',
            dataIndex: 'password',
            ...getColumnSearchProps('password'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    const handleAdd = () => {
        dispatch(open({
            type: "Add users"
        }));
    }
    const handleEdit = (selectedRowKeys) => {
        dispatch(open({
            type: "Edit users"
        }));
        dispatch(editUser(selectedRowKeys[0]));
    }
    const handleDelete = (selectedRowKeys) => {
        dispatch(open({
            type: "Delete users",
            data: selectedRowKeys
        }));
    }
    return (
        <div className='wrapperMaindash'>
            <h1 className="heading-text--large">Danh Sách User</h1>
            {ListUsers.length > 0 ?
                < TableData columns={columns} data={ListUsers}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                /> : <Empty description="Không có dữ liệu" />
            }
        </div>
    );
}

export default Users;