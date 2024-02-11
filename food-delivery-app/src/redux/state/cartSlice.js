import {createSlice } from "@reduxjs/toolkit";

const initialCart = {
    totalCost : 0,
    cartList : [
         
    ],
    removedList : [

    ]
}

 const cartSlice = createSlice({
    name:"cart",
    initialState:initialCart,
    reducers:{
        add_to_cart : (state,action) =>{
            if(state.cartList.filter((item)=> item.id === action.payload.id).length >0){
                state.cartList.find(item => item.id === action.payload.id).quantity+=1
            }else{
                state.cartList.push(action.payload)
            }
            state.removedList = state.removedList.filter((item)=>item !== action.payload.id)
            state.totalCost = state.totalCost + action.payload.price
            console.log(state.removedList.length);
        },
        remove_from_cart : (state,action)=>{
           if(state.cartList.find((item) => item.id === action.payload.id).quantity === 1){ // eğer item tek ise kaldırıcaz
            state.cartList = state.cartList.filter((item) => item.id !== action.payload.id)
           }else{ // birden fazla olma durumu varsa quantity azaltıcaz
            state.cartList.find((item)=>item.id === action.payload.id).quantity-=1
           }
           state.totalCost -= action.payload.price
        },
        remove_all_from_cart : (state,action) =>{

            if(!(state.removedList.find((item)=>item == action.payload.id))){
                state.removedList.push(action.payload.id)
            }
            state.cartList =  state.cartList.filter((item) => item.id !== action.payload.id)
            state.totalCost -= action.payload.total
      
            
        }
    }
 })

 export const {add_to_cart,remove_from_cart,remove_all_from_cart} = cartSlice.actions;
 export default cartSlice.reducer;