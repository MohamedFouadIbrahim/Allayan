import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import MainDrawer from './MainDrawer';
import { MainTabBar } from './MainTabBar';
import { AuthStack } from './Stacks';

interface IAppNavigationProps {
}

export const AppNavigation: React.FC<IAppNavigationProps> = (props) => {
    return (

        <NavigationContainer>
            <SafeAreaView />
            <MainDrawer />
            {/* <MainTabBar /> */}
            {/* <AuthStack /> */}
        </NavigationContainer>
    )
};