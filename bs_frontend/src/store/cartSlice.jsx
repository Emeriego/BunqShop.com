import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {cart : [
        {
            name: "Dummy pro",
            price: 0,
            qty: 0,
            store: "dummy store",
            color: "black"
        },
        {
            name: "Dummy pro2",
            price: 0,
            qty: 0,
            store: "dummy store2",
            color: "green"
        }
    ]},
    reducers: {
        // add(item){

        // },
        // remove(item){

        // },

    }
})

export default cartSlice;
