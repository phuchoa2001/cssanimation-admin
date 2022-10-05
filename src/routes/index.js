import Home from '../page/Home';
import Link404 from '../page/Link404';

import { AnimationRouter } from './animation';
import { CategoryRouter } from './Category';

const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    ...AnimationRouter,
    ...CategoryRouter,
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default router;