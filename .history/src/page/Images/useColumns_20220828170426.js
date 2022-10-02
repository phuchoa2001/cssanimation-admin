

function useColumns() {
    const columns = [
        {
            title: 'Chiều rộng',
            dataIndex: 'width',
            align: 'center'
        },
        {
            title: 'Github',
            dataIndex: 'height',
            align: 'center'
        },
        {
            title: 'Thể loại',
            dataIndex: 'format',
            align: 'center'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            align: 'center'
        },
    ];
    return { columns }
}

export default useColumns