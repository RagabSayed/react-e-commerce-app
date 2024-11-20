import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodayProducts = createAsyncThunk('todayProductSlice/fetchTodayProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})
const todayProductSlice = createSlice({
    initialState: [],
    name: 'todayProductSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodayProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const {} = todayProductSlice.actions;
export default todayProductSlice.reducer;