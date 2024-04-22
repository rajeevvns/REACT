import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from '../../model/Product';
import fetchProducts from '../api/ProductApi';

type ProductState = {
    status: "loading" | "idle",
    error: string | null,
    list: Product[]
}

const initialState: ProductState = {
    status: "idle",
    error : null,
    list: []
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}, /* actions from view */
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
            state.list = [];
            state.error = null
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "idle";
            state.error = null;
            state.list.push(...action.payload)
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "idle";
            state.error = action.payload as string;
            state.list = []
        });
    }
});

export const ProductReducer = ProductSlice.reducer;

// extraReducers are actions dispatched from middleware => Thunk
