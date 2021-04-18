import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomImage from '../../components/CustomImage';
import HorizontalSwiper from '../../components/HorizontalSwiper';
import LazyContainer from '../../components/LazyContainer';
import { screenWidth } from '../../constants/Page';
import { getAllCategories } from '../../services/Categories';
import { ICategory } from '../../types/API';
import { CategoriesStacParamList, HomeStackParamList, MainTabBarParamList } from '../../types/Navigation';
import CategoriesList from './CategoriesList';

interface IHomeProps {
    navigation?: StackNavigationProp<HomeStackParamList ,'Home'>
}

const Home: React.FC<IHomeProps> = (props) => {

    // console.log('props', props)
    const [categories, setCategories] = useState<ICategory[]>([])

    const [banners, setBanners] = useState<string[]>([
        'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU',
        'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII',
        'https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts',
    ])

    useEffect(() => {

        getAllCategories(Categories => { setCategories(Categories) })

    }, [])

    const renderBannerItem = ({ item, index }: ListRenderItemInfo<string>) => (
        <View style={styles.cardContainer}>
            <View
                style={{
                    overflow: 'hidden',
                }}>
                <CustomImage
                    source={{ uri: item }}
                    style={{
                        width: screenWidth,
                        height: screenWidth / 1.77,
                    }}
                    resizeMode="cover"
                />
            </View>
        </View>
    )

    return (
        <LazyContainer>

            <CustomHeader logo  />

            <HorizontalSwiper
                data={banners}
                autoLoop={banners?.length > 1}
                intervalValue={10000}
                renderItem={renderBannerItem}
            />

            <CategoriesList
                categories={categories}
                navigation={props.navigation}
            />

        </LazyContainer>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: screenWidth,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Home;