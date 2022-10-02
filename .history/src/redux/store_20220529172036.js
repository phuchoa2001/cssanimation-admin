import { configureStore } from '@reduxjs/toolkit';


import Order from './useOrder';
import Modal from './useModal'
import Notification from './useNotification';
import Users from './useUsers';
import Products from '../page/Products';
export default configureStore({
    reducer: {
        Order, Modal, Notification , Users , Products
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})