import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchCategoryProducts = createAsyncThunk('categoryProductSlice/fetchCategoryProducts', async(categoryId) => {
    try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        
    }
})

const categoryProductSlice = createSlice({
    initialState: [],
    name: 'categoryProductSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const {} = categoryProductSlice.actions;
export default categoryProductSlice.reducer;