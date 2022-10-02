

function useColumns() {
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'url',
        },
        {
            title: 'Github',
            dataIndex: 'github',
        },
        {
            title: 'Thể loại',
            dataIndex: 'category',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
        },
        {
            title: 'Biểu tượng',
            dataIndex: 'icon',
        },
    ];
    return { columns }
}

export default useColumns