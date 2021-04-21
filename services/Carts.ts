import { ICart } from '../types/API';
import { GET, onFailureType, POST } from '../utils/Network';

interface IProductForCart {
    productId: string,
    quantity: number
}

interface IAddtoCartPost {
    userId: string,
    date: string,
    products: IProductForCart[]
}

export const getCart = (onSuccess?: (responseData: ICart[]) => void, onFailure?: onFailureType) => {

    GET(`carts`, (response) => {
        onSuccess && onSuccess(response.data as ICart[])
    }, onFailure)
}



export const addToCart = (data: IAddtoCartPost, onSuccess?: (responseData: ICart) => void, onFailure?: onFailureType) => {
    POST(`carts`, data, (response) => {
        onSuccess && onSuccess(response.data as IAddtoCartPost)
    }, onFailure)
}
