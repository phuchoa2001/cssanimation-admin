import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Empty, Spin } from 'antd';

import TableData from '../../components/TableData';
import { open } from '../../redux/useModal';
import { editOrder } from '../../redux/useOrder';
import useColumns from './useColumns';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { useImages } from './queries/queries';
import WrapperMaindash from '../../components/WrapperMaindash';

function Image(props) {

    const Listorder = useSelector(state => state.Order.list);
    const dispatch = useDispatch();
    const [search, setSearch] = useCustomSearchParams();
    const argument = {
        params: search,
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isPreviousData, isFetching } = useImages(argument);
    console.log("data", data?.data);
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
            {!isPreviousData && !isFetching ?
                < TableData
                    columns={columns}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    data={data.data.data}
                    loading={isPreviousData && isFetching}
                    pagination={{
                        current: search.page,
                        position: ['bottomCenter'],
                        pageSize: search.page_size,
                        total: data.data.meta.total
                    }}
                    onChange={handleChange}
                /> : <Spin />
            }
        </WrapperMaindash>
    );
}

export default Image;