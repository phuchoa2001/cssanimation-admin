import { Image } from 'antd';

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
                <Image
                    preview={true}
                    src={values.url}
                    width={50}
                />
            )
        },
    ];
    return { columns }
}

export default useColumns