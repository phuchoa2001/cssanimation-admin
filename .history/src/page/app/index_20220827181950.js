import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';

import useColumns from './useColumns';
import TableData from '../../components/TableData';
import { open } from '../../redux/useModal';
import { editUser } from '../../redux/useUsers';
function Users(props) {
    const ListUsers = useSelector(state => state.Users.list);
    const dispatch = useDispatch();
    const { columns } = useColumns();
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