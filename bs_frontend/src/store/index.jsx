import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import toggleSlice from "./toggleSlice"
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        toggleMenu: toggleSlice.reducer,
        cart: cartSlice.reducer,
        products: productSlice.reducer

    }
})

export const actions = counterSlice.actions;
export const actions2 = toggleSlice.actions;
export const cartActions = cartSlice.actions;
export const prodActions = productSlice.actions


export default store;
