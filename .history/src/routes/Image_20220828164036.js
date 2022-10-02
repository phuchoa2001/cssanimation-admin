import App from '../page/app';

import AddApp from '../page/app/add/AddApp';

import { CREATE, EDIT } from './contant'
export const AppRouter = [
    {
        path: "/images",
        exact: true,
        mani: () => <App />,
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
console.log("AppRouter", AppRouter)