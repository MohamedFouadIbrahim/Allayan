import { IProduct } from "../types/API";
import { FavoriteActionTypes, IFavotitesInitialState } from "../types/Redux";

export const types = {
    ADD_TO_FAVORITE: 'ADD_TO_FAVORITE'
};

export const actions = {
    addToFavorite: (dispatch: any, Product: IProduct) => {
        dispatch({ type: types.ADD_TO_FAVORITE, Product })
    }
};

const initialState: IFavotitesInitialState = {
    Products: []
}


export const reducer = (state = initialState, action: FavoriteActionTypes) => {

    const { type, Product } = action;

    switch (type) {

        case types.ADD_TO_FAVORITE:
            
            const ProductAlreadyinCart = state.Products.find(item => item.id == Product?.id)

            if (ProductAlreadyinCart) {
                return {
                    ...state,
                    Products: state.Products.filter(item => item.id != Product?.id)
                }
            } else {
                return {
                    ...state,
                    Products: [...state.Products, { ...Product! }]
                }
            }
            
        default:
            return state

    }
}