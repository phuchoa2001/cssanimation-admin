import Home from '../page/Home';
import Link404 from '../page/Link404';

import { AppRouter } from './app';
import { ImageRouter } from './Image';
import { IconRouter } from './Icon';
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    ...AppRouter,
    ...ImageRouter,
    ...IconRouter
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default router;