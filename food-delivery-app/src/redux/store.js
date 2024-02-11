import {configureStore} from "@reduxjs/toolkit"
import reducer from "./state/cartSlice"



export const store = configureStore({
    reducer:{
        cart:reducer
    }
})

