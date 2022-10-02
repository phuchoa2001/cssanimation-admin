import App from '../page/app';


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
        mani: () => <App />,
    },
    {
        path: `/app${EDIT}`,
        exact: false,
        mani: () => <App />,
    },
]