import { createSlice } from '@reduxjs/toolkit';
import listProduct from '../data/listProduct';
export const useProducts = createSlice({
    name: "useProducts",
    initialState: {
        list: listProduct,
        product: {
            key: null,
            email: "",
            username: "",
            password: ""
        }
    },
    reducers: {
        
    }
})
export const {
   
} =
    useProducts.actions;
export default useProducts.reducer;