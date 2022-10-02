

function useColumns() {
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Tên">{values.name}</div>
            )
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'url',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Đường dẫn">{values.url}</div>
            )
        },
        {
            title: 'Github',
            dataIndex: 'github',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="github">{values.github}</div>
            )
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Hình Ảnh">{values.image.url}</div>
            )
        },
        {
            title: 'Biểu tượng',
            dataIndex: 'icon',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Biểu tượng">{values.icon.url}</div>
            )
        },
    ];
    return { columns }
}

export default useColumns