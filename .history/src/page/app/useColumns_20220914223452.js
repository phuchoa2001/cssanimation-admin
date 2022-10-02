

function useColumns() {
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            align: 'center'
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'url',
            align: 'center'
        },
        {
            title: 'Github',
            dataIndex: 'github',
            align: 'center'
        },
    ];
    return { columns }
}

export default useColumns