import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainTab } from './MainTabBar';
import { SafeAreaView } from 'react-native';

interface IAppNavigationProps {
}

export const AppNavigation: React.FC<IAppNavigationProps> = (props) => {
    return (
        <NavigationContainer>
            <SafeAreaView />
            <MainTab />
        </NavigationContainer>
    )
};