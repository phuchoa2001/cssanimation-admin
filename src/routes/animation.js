import App from '../page/animation';

import AddAnimation from '../page/animation/add/AddAnimation';

import { CREATE, EDIT } from './contant'
export const AnimationRouter = [
    {
        path: "/animations",
        exact: true,
        mani: () => <App />,
    },
    {
        path: `/animations${CREATE}`,
        exact: true,
        mani: () => <AddAnimation />,
    },
    {
        path: `/animations${EDIT}`,
        exact: true,
        mani: () => <AddAnimation />,
    },
]