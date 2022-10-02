import { configureStore } from '@reduxjs/toolkit';


import Order from './useOrder';
import Modal from './useModal'
import Notification from './useNotification';
import Users from './useUsers';
export default configureStore({
    reducer: {
        Order, Modal, Notification , Users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})