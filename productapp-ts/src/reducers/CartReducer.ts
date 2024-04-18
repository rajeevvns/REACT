import Cart from "../model/Cart"
import Product from "../model/Product"

type Action = {
    type: 'ADD_TO_CART',
    payload: Product
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

export interface CartStateType {
    products: Cart[],
    total: number,
    count: number
}

export default function CartReducer(state: CartStateType, action: Action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item: Cart = {
                ...action.payload,
                quantity: 1,
                amount: action.payload.price
            }; // copy of payload
            return {
                products: [...state.products, item], // existing products + push item
                total: state.total + item.amount,
                count: state.count + 1
            }
        case 'INCREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                products: [],
                total: 0,
                count: 0
            }
        default:
            return state;
    }
}