import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { blackColor, mainColor } from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { DrawerAnimationContext } from '../context/Drawer';
import { MainTabBarParamList } from '../types/Navigation';
import { CartStack, FavoritesStack, HomeStack } from './Stacks';

const TabNavigator = createBottomTabNavigator<MainTabBarParamList>();

export const MainTabBar = (props: any) => {

  const { progress } = React.useContext(DrawerAnimationContext)

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],

  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]} >

      <TabNavigator.Navigator>

        <TabNavigator.Screen
          name='HomeTab'
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => <AntDesign name='home' size={25} color={focused ? mainColor : blackColor} />,
            tabBarLabel: ({ focused }) => <Text style={{ color: focused ? mainColor : blackColor, fontFamily: Fonts.tajawalBold }}  >{'Home'}</Text>,
          }}
        />

        <TabNavigator.Screen
          name='FavoritesTab'
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ focused }) => <MaterialIcons name='favorite-border' size={25} color={focused ? mainColor : blackColor} />,
            tabBarLabel: ({ focused }) => <Text style={{ color: focused ? mainColor : blackColor, fontFamily: Fonts.tajawalBold }}  >{'Favorites'}</Text>,
          }}
        />

        <TabNavigator.Screen
          name='CartTab'
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => <AntDesign name='shoppingcart' size={25} color={focused ? mainColor : blackColor} />,
            tabBarLabel: ({ focused }) => <Text style={{ color: focused ? mainColor : blackColor, fontFamily: Fonts.tajawalBold }}  >{'Cart'}</Text>,
          }}
        />
      </TabNavigator.Navigator >
    </Animated.View>

  )

};