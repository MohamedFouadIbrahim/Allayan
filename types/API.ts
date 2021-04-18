
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