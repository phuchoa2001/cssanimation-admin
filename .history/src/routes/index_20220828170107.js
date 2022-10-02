import Home from '../page/Home';
import Link404 from '../page/Link404';

import { AppRouter } from './app';
import { ImageRouter } from './Image';
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    ...AppRouter,
    ...ImageRouter,
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default router;