import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('categorySlice/fetchCategories', async() => {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories');
    const data = await res.json();
    return data
})
const categorySlice = createSlice({
    initialState: [],
    name: 'categorySlice',
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export const {} = categorySlice.actions;
export default categorySlice.reducer;