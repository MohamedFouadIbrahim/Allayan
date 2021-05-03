import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { mainColor } from '../constants/Colors';
import { DrawerAnimationContext } from '../context/Drawer';
import { MainDrawerParamList } from '../types/Navigation';
import { MainTabBar } from './MainTabBar';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const DrawerContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {

    const { progress, navigation } = props;

    const { setProgress } = useContext(DrawerAnimationContext);

    useEffect(() => {
        progress && setProgress(progress);
    }, [progress]);

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: 'transparent' }} >

            <DrawerItem
                label='Home'
                onPress={() => navigation.navigate('HomeDrawer')}
            />

        </DrawerContentScrollView>
    )
}

const MainDrawer: React.FC = () => {

    return (

        <Drawer.Navigator
            initialRouteName='HomeDrawer'
            drawerContent={props => <DrawerContent {...props} />}
            drawerType='slide'
            overlayColor={'1'}
            drawerStyle={styles.drawerStyle}
            sceneContainerStyle={styles.sceneContainerStyle}
        >

            <Drawer.Screen name="HomeDrawer" component={MainTabBar} />

        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: mainColor,
        width: 160
    },
    sceneContainerStyle: {
        backgroundColor: mainColor
    }
})
export default MainDrawer