import { createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice(
    {
        name: "products",
        initialState: {availProds: []},
        reducers: {
            fetch(state, action){
                const prods = action.payload
                prods.map(prod => {
                    state.availProds.push(prod)

                })
                // console.log(state.availProds)
            }
        }
    })
    export default productSlice;
