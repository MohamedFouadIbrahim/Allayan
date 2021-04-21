
export interface ICategory {
    id?: string
    name?: string
    images?: string[]
    hasChildren?: boolean
}

export interface IProduct {
    id?: string
    title?: string
    image: string,
    price: number,

}

export interface IProductInCart {
    productId: string,
    quantity: number
}

export interface ICart {
    id?: string
    userId?: string
    date: string,
    products: IProductInCart[],
}