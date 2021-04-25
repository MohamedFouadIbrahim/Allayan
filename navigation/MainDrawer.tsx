import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import * as React from 'react';
import Animated from 'react-native-reanimated';
import { mainColor } from '../constants/Colors';
import { MainDrawerParamList } from '../types/Navigation';
import { MainTabBar } from './MainTabBar';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const DrawerContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: 'transparent' }} >

            <DrawerItem
                label='Home'
                onPress={() => props.navigation.navigate('HomeDrawer')}
            />

        </DrawerContentScrollView>
    )
}

const MainDrawer: React.FC = () => {

    const [progress, setProgress] = React.useState<Animated.Node<number>>(new Animated.Value(0))

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
        <Drawer.Navigator
            initialRouteName='HomeDrawer'
            drawerContent={(props) => {
                setProgress(props.progress)
                return (
                    <DrawerContent {...props} />
                )
            }}
            drawerType='slide'
            overlayColor={'1'}
            drawerStyle={{
                backgroundColor: mainColor,
                width: 160
            }}
            sceneContainerStyle={{
                backgroundColor: mainColor
            }}
        >
            <Drawer.Screen name="HomeDrawer">
                {props => (
                    <Animated.View style={[{ flex: 1 }, animatedStyle]} >
                        <MainTabBar {...props} />
                    </Animated.View>
                )}
            </Drawer.Screen>

        </Drawer.Navigator>
    );
}

export default MainDrawer