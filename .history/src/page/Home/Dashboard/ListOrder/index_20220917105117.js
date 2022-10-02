import React from 'react';
import { Spin } from 'antd';
//  Data
import useColumns from '../../../app/useColumns';
import { useApp } from '../../../app/queries/queries';
import { useCustomSearchParams } from '../../../../hooks/useCustomSearchParams';
import TableData from '../../../../components/TableData';

const pageSize = 2;
function ListOrder(props) {
    const [search, setSearch] = useCustomSearchParams();
    const argument = {
        params: {
            ...search,
            page_size: pageSize
        },
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isPreviousData, isFetching, isLoading } = useApp(argument);
    console.log("data", data);
    const { columns } = useColumns();


    const handleChange = (query) => {
        setSearch({ ...search, page_size: query.pageSize, page: query.current })
    }
    return (
        <>
            {!isLoading ?
                < TableData
                    rowKey="_id"
                    columns={columns}
                    dataSource={data.data.data}
                    loading={isPreviousData && isFetching}
                    hideButton={true}
                    pagination={{
                        current: search.page,
                        position: ['bottomCenter'],
                        pageSize,
                        total: data.data.meta.total
                    }}
                    onChange={handleChange}
                /> : <Spin />
            }
        </>
    );
}

export default ListOrder;