

function useColumns() {
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Tài khoản',
            dataIndex: 'username',
        },
        {
            title: 'Mất khẩu',
            dataIndex: 'password',
        },
    ];
    return { columns }
}

export default useColumns