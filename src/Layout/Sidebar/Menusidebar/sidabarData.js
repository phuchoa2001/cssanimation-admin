import { HomeOutlined, AppstoreOutlined, ProjectOutlined, FrownOutlined, FileImageOutlined } from '@ant-design/icons';

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeOutlined />,
        path: "/"
    },
    {
        title: "Danh sách ứng dụng",
        icon: <ProjectOutlined />,
        path: "/apps"
    },
    {
        title: "Danh sách Hình ảnh",
        icon: <FileImageOutlined />,
        path: "/images"
    },
    {
        title: "Danh sách biểu tượng",
        icon: <FrownOutlined />,
        path: "/icons"
    },
    // {
    //     title: "Danh sách Bài viết",
    //     icon: <FormOutlined />,
    //     path: "/blogs"
    // },
    {
        title: "Quản lí thể loại",
        icon: <AppstoreOutlined />,
        path: "/categorys"
    },
]