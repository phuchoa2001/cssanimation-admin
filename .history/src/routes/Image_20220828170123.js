import Images from '../page/Images';

import AddApp from '../page/app/add/AddApp';

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
        mani: () => <AddApp />,
    },
    {
        path: `/images${EDIT}`,
        exact: true,
        mani: () => <AddApp />,
    },
]