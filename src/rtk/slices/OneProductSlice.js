import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOneProduct = createAsyncThunk('oneProductSlice/fetchOneProduct', async (productId) => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        
    }
})

const oneProductSlice = createSlice({
    initialState: {},
    name: 'oneProductSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const {} = oneProductSlice.actions;
export default oneProductSlice.reducer;