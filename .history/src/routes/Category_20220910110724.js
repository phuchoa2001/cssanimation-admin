import Category from '../page/Category';
import AddImages from '../page/Images/add/AddImages';

import { CREATE, EDIT } from './contant'
export const ImageRouter = [
    {
        path: "/images",
        exact: true,
        mani: () => <Category />,
    },
]