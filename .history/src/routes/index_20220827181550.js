import Home from '../page/Home';
import App from '../page/app';
import Order from '../page/Order';
import Link404 from '../page/Link404';
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    {
        path: "/users",
        exact: false,
        mani: () => <App />,
    },
    {
        path: "/order",
        exact: false,
        mani: () => <Order />,
    },
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default router;