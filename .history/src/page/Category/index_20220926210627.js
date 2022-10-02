import React, { useState } from 'react';
import { Spin } from 'antd';

import TableData from '../../components/TableData';
import useColumns from './useColumns';
import ModalAdd from './Modal';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { useCategorys, useDeleteCategory } from './queries/queries';
import WrapperMaindash from '../../components/WrapperMaindash';


function Category(props) {
    const [search, setSearch] = useCustomSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(null);
    const argument = {
        params: search,
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isLoading } = useCategorys(argument);
    const { mutate } = useDeleteCategory(argument);
    const { columns } = useColumns();
    const handleChange = (query) => {
        setSearch({ ...search, page_size: query.pageSize, page: query.current })
    }
    const OpenModal = () => {
        setIsModalOpen(true)
    }
    const handleAdd = () => {
        setId(null)
        OpenModal();
    }
    const handleEdit = (selectedRowKeys) => {
        setId(selectedRowKeys[0])
        OpenModal();
    }
    const handleDelete = (selectedRowKeys) => {
        mutate(selectedRowKeys);
    }
    return (
        <WrapperMaindash title={"Danh sách thể loại "}>
            {!isLoading ?
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
            {isModalOpen &&
                <ModalAdd isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} id={id} setId={setId} />
            }
        </WrapperMaindash>
    );
}

export default Category;