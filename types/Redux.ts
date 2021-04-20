import { AnyAction } from "redux";
import { IProduct } from "./API";

export interface IFavotitesInitialState {
    Products: IProduct[]
}

interface IAddToFavorites extends AnyAction {
    type: string,
    Product?: IProduct
}

export type ISystemState = {
    Favotites: IFavotitesInitialState
}

export type FavoriteActionTypes = IAddToFavorites
