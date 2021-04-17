import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../containers/Home';

export interface IMainTabProps {

}

export type ITabNavigator = {
  Home: undefined
}

export const TabNavigator = createBottomTabNavigator<ITabNavigator>();

export const MainTab: React.FC<IMainTabProps> = (props) => {

  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name='Home' component={Home} />
    </TabNavigator.Navigator>
  )

};