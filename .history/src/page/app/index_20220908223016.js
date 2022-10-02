import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';
import { useHistory } from "react-router-dom";

import useColumns from './useColumns';
import TableData from '../../components/TableData';
import { open } from '../../redux/useModal';
import { editUser } from '../../redux/useUsers';
import WrapperMaindash from '../../components/WrapperMaindash';

function Users(props) {
    const ListUsers = useSelector(state => state.Users.list);
    let history = useHistory();
    const dispatch = useDispatch();
    const { columns } = useColumns();
    const handleAdd = () => {
        history.push("/app/create");
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
        <WrapperMaindash title="Danh Sách User">
            {ListUsers.length > 0 ?
                < TableData columns={columns} data={ListUsers}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                /> : <Empty description="Không có dữ liệu" />
            }
        </WrapperMaindash>
    );
}

export default Users;