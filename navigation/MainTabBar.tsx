import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../containers/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
export interface IMainTabProps {

}

export type ITabNavigator = {
  Home: undefined
}

export const TabNavigator = createBottomTabNavigator<ITabNavigator>();

export const MainTab: React.FC<IMainTabProps> = (props) => {

  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name='Home' component={Home} options={{ tabBarIcon: () => <AntDesign name='home' /> }} />
    </TabNavigator.Navigator>
  )

};