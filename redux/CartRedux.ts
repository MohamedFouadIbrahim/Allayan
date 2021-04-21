import { addToCart } from "../services/Carts";
import { ICart } from "../types/API";
import { CartActionTypes, ICartInitialState } from "../types/Redux";

export const types = {
    ADD_TO_CART: 'ADD_TO_CART'
};

export const actions = {
    addToCart: (dispatch: any, Cart: ICart) => {

        addToCart({
            userId: Cart.userId!,
            products: Cart.products,
            date: Cart.date
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

    const { type, Cart } = action;

    switch (type) {

        case types.ADD_TO_CART:
            return {
                ...state,
                Cart
            }
        default:
            return state

    }
}