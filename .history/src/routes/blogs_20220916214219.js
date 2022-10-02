import Blogs from '../page/blogs';

import AddBlog from '../page/blogs/add/AddBlog';

import { CREATE, EDIT } from './contant'
export const BlogRouter = [
    {
        path: "/blogs",
        exact: true,
        mani: () => <Blogs />,
    },
    {
        path: `/blogs${CREATE}`,
        exact: true,
        mani: () => <AddBlog />,
    },
    {
        path: `/blogs${EDIT}`,
        exact: true,
        mani: () => <AddBlog />,
    },
]