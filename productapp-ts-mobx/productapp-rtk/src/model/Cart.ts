import Product from "./Product";

export default interface Cart extends Product {
    quantity: number, // how many added to cart
    amount: number // price * qty + tax - discount
}