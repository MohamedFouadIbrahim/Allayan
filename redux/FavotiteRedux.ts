import { Dispatch } from "redux";
import { IProduct } from "../types/API";
import { FavoriteActionTypes, IFavotitesInitialState } from "../types/Redux";

export const types = {
    ADD_TO_FAVORITE: 'ADD_TO_FAVORITE'
};

export const actions = {
    addToFavorite: (dispatch: any, Product: IProduct) => {
        dispatch({ type: types.ADD_TO_FAVORITE, Product })

        console.log('ay')

    }
};

const initialState: IFavotitesInitialState = {
    Products: []
}


export const reducer = (state = initialState, action: FavoriteActionTypes) => {
console.log('sss')
    const { type, Product } = action;

    switch (type) {
        case types.ADD_TO_FAVORITE:
            return {
                ...state,
                Products: [...state.Products, { ...Product! }]
            }
        default:
            return state
    }
}