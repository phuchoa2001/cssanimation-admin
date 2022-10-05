

function useColumns() {
    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Tên">{values.title}</div>
            )
        },

    ];
    return { columns }
}

export default useColumns