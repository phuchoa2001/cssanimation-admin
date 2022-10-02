

function useColumns() {
    const columns = [
        {
            title: 'Chiều rộng',
            dataIndex: 'width',
            align: 'center'
        },
        {
            title: 'Chiều cao',
            dataIndex: 'height',
            align: 'center'
        },
        {
            title: 'Định dạng',
            dataIndex: 'format',
            align: 'center'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            align: 'center',
            render: (_, values) => (
                <img
                    src={values.url}
                    alt={values.format}
                    style={{ height: 50, width: 50 }}
                />
            )
        },
    ];
    return { columns }
}

export default useColumns