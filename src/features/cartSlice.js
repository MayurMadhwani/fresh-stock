import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[],
}

export const cartSlice = createSlice({

    name: 'cartItems',
    initialState,
    reducers:{
        update: (state, action)=>{
            state.value = action.payload
        }
    }
    
})

export const {update} = cartSlice.actions;

export default cartSlice.reducer;