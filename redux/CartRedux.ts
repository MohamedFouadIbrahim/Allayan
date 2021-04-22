import { addToCart } from "../services/Carts";
import { ICart, IProduct } from "../types/API";
import { CartActionTypes, ICartInitialState } from "../types/Redux";
import configure from './configure';
export const types = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const productInCart = (Cart: ICart, Product: IProduct): boolean => {
    const currentProduct = Cart.products.find(item => item.productId == Product.id)
    if (currentProduct) {
        return true
    }
    return false
}

export const actions = {
    addToCart: (dispatch: any, Product: IProduct, Quantity: number) => {

        const store = configure().store
        const Cart = store.getState().Cart.Cart
        const newCart: ICart = Object.assign({}, Cart)

        if (productInCart(Cart, Product)) { // increese Quatity
            newCart.products = newCart.products.map(productInCart => ({
                ...productInCart,
                quantity: Quantity
            }))
        } else { // add new Product To Cart
            newCart.products.push({ productId: Product.id!, quantity: Quantity })
            newCart.date = new Date().toISOString()
        }

        addToCart({
            userId: newCart.userId!,
            products: newCart.products,
            date: newCart.date
        }, res => {

            dispatch({
                type: types.ADD_TO_CART,
                Cart: {
                    id: res.id,
                    userId: res.userId,
                    date: String(res.date),
                    products: res.products
                }
            })

        })

    },
    removeFromCart: (dispatch: any, Product: IProduct) => {
        dispatch({
            type: types.REMOVE_FROM_CART,
            Product
        })
    }

};

const initialState: ICartInitialState = {
    Cart: {
        date: '',
        id: '',
        products: [],
        userId: ''
    }
}


export const reducer = (state = initialState, action: CartActionTypes) => {

    const { type, Cart, Product } = action;

    switch (type) {

        case types.ADD_TO_CART:

            return {
                ...state,
                Cart
            }

        case types.REMOVE_FROM_CART:

            return {
                ...state,
                Cart: {
                    ...state.Cart,
                    products: state.Cart.products.filter(item => item.productId == Product.id)
                }
            }

        default:
            return state

    }
}