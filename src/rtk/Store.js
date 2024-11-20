import { configureStore } from '@reduxjs/toolkit';
import todayProductSlice from './slices/TodayProductSlice';
import categorySlice from './slices/CategorySlice';
import oneProductSlice from './slices/OneProductSlice';
import signupSlice from './slices/SignupSlice';
import wishlistSlice from './slices/WishlistSlice';
import cartSlice from './slices/CartSlice';
import categoryProductSlice from './slices/CategoryProductSlice';

export const Store = configureStore({
  reducer: {
    todayProducts: todayProductSlice,
    categories: categorySlice,
    oneProduct: oneProductSlice,
    usersData: signupSlice,
    wishlistItems: wishlistSlice,
    cartItems: cartSlice,
    categoryProducts: categoryProductSlice
  },
})