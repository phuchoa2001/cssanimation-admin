import React from 'react'
import { useSearch } from '../../hooks/useSearch';

function useColumns() {
    const { getColumnSearchProps } = useSearch();
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.address.length - b.address.length,
        },
        {
            title: 'Tài khoản',
            dataIndex: 'username',
            ...getColumnSearchProps('username'),
            sorter: (a, b) => a.address.length - b.address.length,
        },
        {
            title: 'Mất khẩu',
            dataIndex: 'password',
            ...getColumnSearchProps('password'),
            sorter: (a, b) => a.address.length - b.address.length,
        },
    ];
}

export default useColumns