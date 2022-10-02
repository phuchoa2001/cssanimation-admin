

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
        {
            title: 'Thể loại',
            dataIndex: 'category',
            align: 'center'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            align: 'center'
        },
        {
            title: 'Biểu tượng',
            dataIndex: 'icon',
            align: 'center'
        },
    ];
    return { columns }
}

export default useColumns