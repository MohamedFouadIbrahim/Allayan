import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cart from '../containers/Cart';
import Categories from '../containers/Categories';
import Favorites from '../containers/Favorites';
import Home from '../containers/Home';
import Product from '../containers/Product';
import Products from '../containers/Products';
import { CartStackParamList, CategoriesStacParamList, FavoritesStackParamList, HomeStackParamList, ProductsStacParamList } from '../types/Navigation';

const CategoriesStackNavigator = createStackNavigator<CategoriesStacParamList>()
const ProductsStackNavigator = createStackNavigator<ProductsStacParamList>()
const HomeStackNavigator = createStackNavigator<HomeStackParamList>()
const FavoritesStackNavigator = createStackNavigator<FavoritesStackParamList>()
const CartStackNavigator = createStackNavigator<CartStackParamList>()


export const CategoriesStack = () => (
    <CategoriesStackNavigator.Navigator headerMode='none' >
        <CategoriesStackNavigator.Screen name='Categories' component={Categories} />
    </CategoriesStackNavigator.Navigator>
)

export const ProductsStackStack = () => (
    <ProductsStackNavigator.Navigator headerMode='none' >
        <ProductsStackNavigator.Screen name='Products' component={Products} />
        <ProductsStackNavigator.Screen name='Product' component={Product} />
    </ProductsStackNavigator.Navigator>
)

export const HomeStack = () => (
    <HomeStackNavigator.Navigator headerMode='none' >
        <HomeStackNavigator.Screen name='Home' component={Home} />
        <HomeStackNavigator.Screen name='Categories' component={CategoriesStack} />
        <HomeStackNavigator.Screen name='Products' component={ProductsStackStack} />
    </HomeStackNavigator.Navigator>
)

export const FavoritesStack = () => (
    <FavoritesStackNavigator.Navigator headerMode='none' >
        <FavoritesStackNavigator.Screen name='Favorites' component={Favorites} />
        <ProductsStackNavigator.Screen name='Product' component={Product} />
    </FavoritesStackNavigator.Navigator>
)

export const CartStack = () => (
    <CartStackNavigator.Navigator headerMode='none' >
        <CartStackNavigator.Screen name='Cart' component={Cart} />
    </CartStackNavigator.Navigator>
)