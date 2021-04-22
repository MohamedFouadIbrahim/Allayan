import { AnyAction } from "redux";
import { ICart, IProduct } from "./API";

export interface IFavotitesInitialState {
    Products: IProduct[]
}

interface IAddToFavoritesAction extends AnyAction {
    type: string,
    Product?: IProduct
}

export type ISystemState = {
    Favotites: IFavotitesInitialState,
    Cart: ICartInitialState
}

export interface ICartInitialState {
    Cart: ICart
}

interface IAddToCartAction extends AnyAction {
    type: string,
    Cart: ICart
}

interface IRemoveFromCartAction extends AnyAction {
    type: string,
    Product: IProduct
}


export type FavoriteActionTypes = IAddToFavoritesAction

export type CartActionTypes = IAddToCartAction | IRemoveFromCartAction
