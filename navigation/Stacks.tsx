import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../containers/Home';
import { CategoriesStacType, HomeStacType } from '../types/Navigation';

const CategoriesStackNavigator = createStackNavigator<CategoriesStacType>()
const HomeStackNavigator = createStackNavigator<HomeStacType>()


export const CategoriesStack = () => (
    <CategoriesStackNavigator.Navigator>
    </CategoriesStackNavigator.Navigator>
)

export const HomeStack = () => (
    <HomeStackNavigator.Navigator headerMode='none' >
        <HomeStackNavigator.Screen name='Home' component={Home} />
    </HomeStackNavigator.Navigator>
)
