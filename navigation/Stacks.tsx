import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Categories from '../containers/Categories';
import Home from '../containers/Home';
import Product from '../containers/Product';
import Products from '../containers/Products';
import { CategoriesStacParamList, HomeStackParamList, ProductsStacParamList } from '../types/Navigation';

const CategoriesStackNavigator = createStackNavigator<CategoriesStacParamList>()
const ProductsStackNavigator = createStackNavigator<ProductsStacParamList>()
const HomeStackNavigator = createStackNavigator<HomeStackParamList>()


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
