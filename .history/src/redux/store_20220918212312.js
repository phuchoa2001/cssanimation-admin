import { configureStore } from '@reduxjs/toolkit';


import Order from './useOrder';
import Modal from './useModal'
import Notification from './useNotification';
import Users from './useUsers';
import Auth from './authSlice';
export default configureStore({
    reducer: {
        Order, Modal, Notification, Users, Auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})