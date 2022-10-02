import App from '../page/app';

import AddApp from '../page/app/add/AddApp';

import { CREATE, EDIT } from './contant'
export const AppRouter = [
    {
        path: "/app",
        exact: false,
        mani: () => <App />,
    },
    {
        path: `/app${CREATE}`,
        exact: false,
        mani: () => <AddApp />,
    },
    {
        path: `/app${EDIT}`,
        exact: false,
        mani: () => <AddApp />,
    },
]