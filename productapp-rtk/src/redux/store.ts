import { configureStore } from "@reduxjs/toolkit";
import { CartState, cartReducer } from "./features/CartSlice";
import { userReducer } from "./features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductReducer } from "./features/ProductSlice";
import { customersApi } from "./api/CustomerApi";

// by default it adds devtool
// devTools: true
const store = configureStore({
    // root reducer
    reducer: {
         cart: cartReducer,
         customer: userReducer,
         products: ProductReducer,
         [customersApi.reducerPath]: customersApi.reducer
    },
    // devTools: false
    // adding middleware enables features like caching, pre-peftching
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

// type safe hooks
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



export default store;
