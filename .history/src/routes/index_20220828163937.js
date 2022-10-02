import Home from '../page/Home';
import Link404 from '../page/Link404';

import { AppRouter } from './app';
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    ...AppRouter,
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default router;