import Icon from '../page/Icon';
import AddIcon from '../page/Icon/add/AddIcon';

import { CREATE, EDIT } from './contant'
export const IconRouter = [
    {
        path: "/icon",
        exact: true,
        mani: () => <Icon />,
    },
    {
        path: `/icon${CREATE}`,
        exact: true,
        mani: () => <AddIcon />,
    },
    {
        path: `/icon${EDIT}`,
        exact: true,
        mani: () => <AddIcon />,
    },
]