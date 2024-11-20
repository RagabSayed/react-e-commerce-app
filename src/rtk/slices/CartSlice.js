import {createSlice } from '@reduxjs/toolkit';

const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [];
const cartSlice = createSlice({
    initialState: {
        cartItems,
    },
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        cartEditQuant: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id && item.userId === action.payload.userId);
            state.cartItems[itemIndex].quant = action.payload.quant;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeItem: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id && item.userId === action.payload.userId);
            state.cartItems.splice(itemIndex, 1);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    }
})

export const {addToCart, cartEditQuant, removeItem} = cartSlice.actions;
export default cartSlice.reducer;