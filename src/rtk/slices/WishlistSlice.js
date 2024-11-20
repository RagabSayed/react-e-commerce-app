import {createSlice } from '@reduxjs/toolkit';

const wishlistItems = localStorage.getItem('wishlistItems')? JSON.parse(localStorage.getItem('wishlistItems')): [];
const wishlistSlice = createSlice({
    initialState: {
        wishlistItems, 
    },
    name: 'wishlistSlice',
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlistItems.push(action.payload);
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
        },
        removeFromWishlist: (state, action) => {
            const itemIndex = state.wishlistItems.findIndex(item => item.id === action.payload.id && item.userId === action.payload.userId);
            state.wishlistItems.splice(itemIndex, 1);
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
        },
        removeAllWishlist: (state, action) => {
            state.wishlistItems = action.payload;
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
        }
    }
    
})
export const {addToWishlist, removeFromWishlist, removeAllWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;