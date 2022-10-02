

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
            title: 'Định dạng',
            dataIndex: 'format',
            align: 'center',
            key: 'format',
            render: (_, values) => (
                <div data-label="format">{values.format}</div>
            )
        },
    ];
    return { columns }
}

export default useColumns