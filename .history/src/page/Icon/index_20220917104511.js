import React from 'react';
import { Spin } from 'antd';
import { useHistory } from 'react-router-dom';

import TableData from '../../components/TableData';
import useColumns from './useColumns';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { useIcons, useDeleteImage } from './queries/queries';
import WrapperMaindash from '../../components/WrapperMaindash';
import { CREATE } from '../../routes/contant'


function Icon(props) {
    const [search, setSearch] = useCustomSearchParams();
    const history = useHistory();
    const argument = {
        params: search,
        options: {
            keepPreviousData: true,
        },
    };
    const { data , isLoading} = useIcons(argument);
    const { mutate } = useDeleteImage(argument);
    const { columns } = useColumns();

    const handleChange = (query) => {
        setSearch({ ...search, page_size: query.pageSize, page: query.current })
    }
    const handleAdd = () => {
        history.push(`/icons${CREATE}`)
    }
    const handleEdit = (selectedRowKeys) => {
        alert("Phần này không có Edit")
    }
    const handleDelete = (selectedRowKeys) => {
        mutate(selectedRowKeys);
    }
    return (
        <WrapperMaindash title={"Danh Sách icon"}>
            {!isLoading  ?
                < TableData
                    rowKey="_id"
                    columns={columns}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    dataSource={data.data.data}
                    loading={isLoading}
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

export default Icon;