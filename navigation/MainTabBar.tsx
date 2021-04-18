import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { blackColor, mainColor } from '../constants/Colors';
import Fonts from '../constants/Fonts';
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
      <TabNavigator.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <AntDesign name='home' size={25} color={focused ? mainColor : blackColor} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? mainColor : blackColor, fontFamily: Fonts.tajawalBold }}  >{'Home'}</Text>,
        }}
      />
    </TabNavigator.Navigator>
  )

};

