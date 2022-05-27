import Home from '../page/Home';
import ListUser from '../page/ListUser';
import Order from '../page/Order';
import Product from '../page/Product';
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    {
        path: "/listuser",
        exact: true,
        mani: () => <ListUser />,
    },
    {
        path: "/order",
        exact: true,
        mani: () => <Order />,
    },
    {
        path: "/product",
        exact: true,
        mani: () => <Product />,
    },
]
export default router;