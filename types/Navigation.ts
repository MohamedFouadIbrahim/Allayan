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


export type CartStackParamList = {
    Cart: undefined
}

export type AuthStackParamList = {
    Login: undefined,
    Registration: undefined,
}


export type MainTabBarParamList = {
    HomeTab: undefined,
    FavoritesTab: undefined,
    CartTab: undefined
}
