import App from '../page/app';

import AddApp from '../page/app/add/AddApp';

import { CREATE, EDIT } from './contant'
export const AppRouter = [
    {
        path: "/apps",
        exact: true,
        mani: () => <App />,
    },
    {
        path: `/apps${CREATE}`,
        exact: true,
        mani: () => <AddApp />,
    },
    {
        path: `/apps${EDIT}`,
        exact: true,
        mani: () => <AddApp />,
    },
]