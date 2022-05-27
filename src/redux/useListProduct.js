import { createSlice } from '@reduxjs/toolkit';;
export const useListProduct = createSlice({
    name: "useListProduct",
    initialState: {
        data: [],
        list: [],
        page: 1,
        search: "",
    },
    reducers: {
        get: (state, action) => {
            
        },
    }
})
export const {
    get 
} =
    useListProduct.actions;
export default useListProduct.reducer;