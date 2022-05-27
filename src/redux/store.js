import { configureStore } from '@reduxjs/toolkit';
import ListProduct from './useListProduct';
export default configureStore({
    reducer: {
        ListProduct
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})