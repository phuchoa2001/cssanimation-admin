import Icon from '../page/Icon';
import AddIcon from '../page/Icon/add/AddIcon';

import { CREATE, EDIT } from './contant'
export const IconRouter = [
    {
        path: "/icons",
        exact: true,
        mani: () => <Icon />,
    },
    {
        path: `/icons${CREATE}`,
        exact: true,
        mani: () => <AddIcon />,
    },
    {
        path: `/icons${EDIT}`,
        exact: true,
        mani: () => <AddIcon />,
    },
]