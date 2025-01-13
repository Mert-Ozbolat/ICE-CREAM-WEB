import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => { },
        deleteFromCart: (state, { payload }) => { }
    }
})


export const { addToCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer