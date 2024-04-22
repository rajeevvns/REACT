import { action, computed, makeObservable, observable } from "mobx";
import Product from "../model/Product";
import Cart from "../model/Cart";


class CartStore {
    @observable
    cart: Cart[] = []
    constructor() {
        makeObservable(this); // make CartStore also observable
    }

    @action
    addToCart(product:Product) {
        let item: Cart = {
            ...product,
            quantity: 1,
            amount: product.price
        }

        this.cart.push(item);
    }

    @computed
    get total() {
        // gets triggered eact tim Observable changes
        return this.cart.map(i => i.amount).reduce( (v1, v2) => v1 + v2);
    }

    @computed
    get count() {
        return this.cart.length;
    }
}

const cartStore = new CartStore(); // object
export default cartStore; // singleton