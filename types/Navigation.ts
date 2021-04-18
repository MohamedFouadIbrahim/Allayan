import { ICategory } from "./API"

export type CategoriesStacParamList = {
    Categories: undefined
}

export type ProductsStacParamList = {
    Products: {
        category: ICategory | null
    },
    Product: {
        id: string
    }
}

export type HomeStackParamList = {
    Home: undefined,
    Categories: CategoriesStacParamList,
    Products: ProductsStacParamList
}

export type MainTabBarParamList = {
    HomeTab: undefined
}
