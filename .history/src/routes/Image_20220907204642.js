import Images from '../page/Images';
import AddImages from '../page/Images/add/AddImages';

import { CREATE, EDIT } from './contant'
export const ImageRouter = [
    {
        path: "/images",
        exact: true,
        mani: () => <Images />,
    },
    {
        path: `/images${CREATE}`,
        exact: true,
        mani: () => <AddImages />,
    },
    {
        path: `/images${EDIT}`,
        exact: true,
        mani: () => <AddImages />,
    },
]