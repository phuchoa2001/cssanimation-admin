import { Image } from 'antd';

function useColumns() {
    const columns = [
        {
            title: 'Chiều rộng',
            dataIndex: 'width',
            align: 'center',
            render: (_, values) => (
                <div data-label={values.width}>{values.width}</div>
            )
        },
        {
            title: 'Chiều cao',
            dataIndex: 'height',
            align: 'center',
            render: (_, values) => (
                <div data-label={values.height}>{values.height}</div>
            )
        },
        {
            title: 'Định dạng',
            dataIndex: 'format',
            align: 'center',
            render: (_, values) => (
                <div data-label="format">{values.format}</div>
            )
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            align: 'center',
            render: (_, values) => (
                <div data-label={"url"}>
                    <Image
                        preview={true}
                        src={values.url}
                        width={100}
                    />
                </div>
            )
        },
    ];
    return { columns }
}

export default useColumns