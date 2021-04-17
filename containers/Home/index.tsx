import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Dimensions, ListRenderItemInfo, StyleSheet, Text } from 'react-native';
import { ListRenderItem, useWindowDimensions, View } from 'react-native';
import CustomImage from '../../components/CustomImage';
import HorizontalSwiper from '../../components/HorizontalSwiper';
import LazyContainer from '../../components/LazyContainer';
import { screenWidth } from '../../constants/Page';
import { getAllCategories } from '../../services/Categories';
import { categoriesType } from '../../types/API';

interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {

    const [categories, setCategories] = useState<categoriesType>([])

    const [banners, setBanners] = useState<any[]>([
        require('../../assets/Images/1.jpg'),
        require('../../assets/Images/2.jpg'),
        require('../../assets/Images/3.jpg'),
    ])

    useEffect(() => {

        getAllCategories(res => { setCategories(res.data) })

    }, [])

    const renderBannerItem = ({ item, index }: ListRenderItemInfo<any>) => (
        <View style={styles.cardContainer}>
            <View
                style={{
                    overflow: 'hidden',
                }}>
                 <CustomImage
                    source={item}
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

            <HorizontalSwiper
                data={banners}
                autoLoop={banners?.length > 1}
                intervalValue={10000}
                renderItem={renderBannerItem}
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