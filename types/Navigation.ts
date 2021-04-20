import { ICategory, IProduct } from "./API"

export type CategoriesStacParamList = {
    Categories: {
        category: ICategory | null
    }
}

export type ProductsStacParamList = {
    Products: {
        category: ICategory | null
    },
    Product: {
        Product: IProduct
    }
}

export type HomeStackParamList = {
    Home: undefined,
    Categories: CategoriesStacParamList,
    Products: ProductsStacParamList
}

export type FavoritesStackParamList = {
    Favorites: undefined,
    Products: ProductsStacParamList
}


export type MainTabBarParamList = {
    HomeTab: undefined,
    FavoritesTab: undefined
}
