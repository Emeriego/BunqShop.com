import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import toggleSlice from "./toggleSlice"
import cartSlice from "./cartSlice"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        toggleMenu: toggleSlice.reducer,
        cart: cartSlice.reducer
    }
})

export const actions = counterSlice.actions;
export const actions2 = toggleSlice.actions;
export const cartActions = cartSlice.actions;


export default store;
