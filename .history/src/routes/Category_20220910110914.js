import Category from '../page/Category';

export const CategoryRouter = [
    {
        path: "/categorys",
        exact: true,
        mani: () => <Category />,
    },
]