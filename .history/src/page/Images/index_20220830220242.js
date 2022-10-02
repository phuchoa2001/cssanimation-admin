import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';

import TableData from '../../components/TableData';
import { open } from '../../redux/useModal';
import { editOrder } from '../../redux/useOrder';
import useColumns from './useColumns';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import WrapperMaindash from '../../components/WrapperMaindash';

function Image(props) {
    const Listorder = useSelector(state => state.Order.list);
    const dispatch = useDispatch();
    const [search , setSearch] = useCustomSearchParams();
    console.log("search" , search);
    const { columns } = useColumns();
    
    const handleChange = (query) => {
      console.log(query)
    }
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
                    pagination={{
                        current: search.page,
                        position: ['bottomCenter'],
                        pageSize: search.page_size,
                        // total: data?.meta?.total ?? 0,
                    }}
                    onChange={handleChange}
                /> : <Empty description="Không có dữ liệu" />
            }
        </WrapperMaindash>
    );
}

export default Image;