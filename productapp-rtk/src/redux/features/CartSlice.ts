import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../../model/Cart";
import Product from "../../model/Product";

export interface CartState {
    products: Cart[],
    total: number,
    count: number
}

const initialState: CartState = {
    products: [],
    total: 0,
    count: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            // no need to clone; state referenced here is a clone [pointer]
            state.products.push({ ...action.payload, quantity: 1, amount: action.payload.price });
            state.total = state.total + action.payload.price;
            state.count++;
            // no need to return the state; because call by reference
        },
        increment: (state, action: PayloadAction<number>) => {
            let item = state.products.find(p => p.id === action.payload);
            if (item?.quantity) {
                item.quantity++;
            }
            if (item?.amount) {
                item.amount = item.price * item.quantity
            }
            state.total = state.products.map(p => p.amount).reduce((v1, v2) => v1 + v2);
        },
        clearCart: (state) => {
            state.products = [];
            state.total = 0;
            state.count = 0;
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const { addToCart, increment, clearCart } = cartSlice.actions