import { createContext, useReducer } from "react";
import Cart from "../model/Cart";
import Product from "../model/Product";
import CartReducer from "../reducers/CartReducer";

type ContextType = {
    products: Cart[],
    total: number,
    count: number,
    addToCart: (product: Product) => void,
    increment: (id: number) => void,
    checkout: () => void
}

// central placeholder for my data
export const CartContext = createContext<ContextType>({
    products: [],
    total: 0,
    count: 0,
    addToCart: (product: Product) => { },
    increment: (id: number) => { },
    checkout: () => { }
});

const initialState = {
    products: [],
    total: 0,
    count: 0
}

type AppProps = {
    children: React.ReactNode
}
export default function CartProvider(props: AppProps) {
    let [state, dispatch] = useReducer(CartReducer, initialState);

    function addToCart(product: Product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    function increment(id: number) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    function checkout() {
        // code to write server

        dispatch({ type: 'CLEAR_CART' });
    }

    return <CartContext.Provider value={{
        products: state.products, // managed by reducer
        total: state.total, // managed by reducer
        count: state.count,  //managed by reducer
        addToCart,
        increment,
        checkout
    }}>
        {props.children}
    </CartContext.Provider>
}

