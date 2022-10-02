

function useColumns() {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            align: 'center',
            key: 'index',
            render: (_, values, index) => (
                <div data-label="STT">{index + 1}</div>
            )
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            align: 'center',
            key: 'name',
            render: (_, values) => (
                <div data-label="format">{values.name}</div>
            )
        },
    ];
    return { columns }
}

export default useColumns