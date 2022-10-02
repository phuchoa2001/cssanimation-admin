import { Image } from 'antd';

function useColumns() {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            align: 'center',
            key: 'index',
            render: (_, values,index) => (
                <div data-label="STT">{index + 1}</div>
            )
        },
        {
            title: 'Chiều rộng',
            dataIndex: 'width',
            align: 'center',
            key: 'width',
            render: (_, values) => (
                <div data-label="width">{values.width}</div>
            )
        },
        {
            title: 'Chiều cao',
            dataIndex: 'height',
            align: 'center',
            key: 'height',
            render: (_, values) => (
                <div data-label="height">{values.height}</div>
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
        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            align: 'center',
            key: 'url',
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