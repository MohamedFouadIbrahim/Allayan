import { ICategory, IProduct } from '../types/API';
import { GET, onFailureType } from '../utils/Network';

export const getProductsByCategory = (Category: ICategory, onSuccess?: (responseData: IProduct[]) => void, onFailure?: onFailureType) => {

    GET(`products/category/${Category.name}`, (response) => {

        const mappedProducts: IProduct[] = response.data.map((item: IProduct, index: string) => (
            {
                ...item,
                id: String(item.id)
            }
        ))

        onSuccess && onSuccess(mappedProducts)

    }, onFailure)
}

export const getProducts = ( onSuccess?: (responseData: IProduct[]) => void, onFailure?: onFailureType) => {

    GET(`products`, (response) => {

        const mappedProducts: IProduct[] = response.data.map((item: IProduct, index: string) => (
            {
                ...item,
                id: String(item.id)
            }
        ))

        onSuccess && onSuccess(mappedProducts)

    }, onFailure)
}