

function useColumns() {
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            align: 'center', 
            render: (_, values, index) => (
                <div data-label="Name">{values.name}</div>
            )
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'url',
            align: 'center' ,
            render: (_, values, index) => (
                <div data-label="Url">{values.url}</div>
            )
        },
        {
            title: 'Github',
            dataIndex: 'github',
            align: 'center' , 
            render: (_, values, index) => (
                <div data-label="github">{values.github}</div>
            )
        },
    ];
    return { columns }
}

export default useColumns