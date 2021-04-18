import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { blackColor, mainColor } from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { MainTabBarType } from '../types/Navigation';
import { HomeStack } from './Stacks';

const TabNavigator = createBottomTabNavigator<MainTabBarType>();

export const MainTabBar = () => {

  return (
    <TabNavigator.Navigator>

      <TabNavigator.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => <AntDesign name='home' size={25} color={focused ? mainColor : blackColor} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? mainColor : blackColor, fontFamily: Fonts.tajawalBold }}  >{'Home'}</Text>,
        }}
      />

    </TabNavigator.Navigator >
  )

};