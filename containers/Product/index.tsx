import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomHeader from '../../components/CustomHeader';
import CustomImage from '../../components/CustomImage';
import LazyContainer from '../../components/LazyContainer';
import WishListIcon from '../../components/WishListIcon';
import { mainColor, whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { largePagePadding, screenHeight, screenWidth } from '../../constants/Page';
import { ProductsStacParamList } from '../../types/Navigation';

interface IProductProps extends StackScreenProps<ProductsStacParamList, 'Product'> {
}


const Product: React.FC<IProductProps> = (props) => {

    const {
        route: {
            params: {
                Product
            }
        }
    } = props

    return (
        <LazyContainer
            style={{
                backgroundColor: whiteColor,
            }}
        >

            <CustomHeader back logo />

            <ScrollView
                contentContainerStyle={{
                    height: screenHeight,
                    alignItems: 'center'
                }}
            >
                <ImageBackground
                    source={{ uri: Product.image }}
                    style={styles.productImage}
                    resizeMode='contain'
                >
                    <WishListIcon
                        product={Product}
                        selected={false}
                        style={styles.wishIcon}
                    />
                </ImageBackground>

                <View style={styles.detailsCard}>

                    <Text style={[styles.txtSt, { fontSize: 20, marginVertical: 10, paddingHorizontal: 10 }]} >
                        {Product.title}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }} >

                        <CustomImage
                            source={require('../../assets/Images/barcode.png')}
                            style={styles.rowImageIcon}
                            resizeMode='contain'
                        />

                        <Text style={styles.txtSt} >
                            {Product.id}
                        </Text>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }} >

                        <CustomImage
                            source={require('../../assets/Images/money.png')}
                            style={styles.rowImageIcon}
                            resizeMode='contain'
                        />

                        <Text style={styles.txtSt} >
                            {`${Product.price} $`}
                        </Text>

                    </View>

                </View>

            </ScrollView>

            <TouchableOpacity
                style={styles.addToCartBtn}
                onPress={() => { }}
            >

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/Images/buy.png')}
                        style={styles.addToCartImage}
                    />
                    <Text
                        style={styles.addToCartTxt}>
                        {'AddToCart'}
                    </Text>
                </View>

            </TouchableOpacity>

        </LazyContainer>

    )

};
export default Product


const styles = StyleSheet.create({
    addToCartImage: {
        tintColor: whiteColor,
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 10,
    },
    addToCartTxt: {
        color: whiteColor,
        fontFamily: Fonts.tajawalRegular,
        fontSize: 18,
        height: 20,
        paddingTop: 3
    },
    productImage: {
        width: screenWidth - largePagePadding,
        height: screenWidth * 0.8,
        backgroundColor: whiteColor,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10
    },
    detailsCard: {
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderRadius: 30,
        width: screenWidth - largePagePadding,
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        borderWidth: 0,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 40,
    },
    addToCartBtn: {
        backgroundColor: mainColor,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 25,
        borderWidth: 0,
        position: 'absolute',
        bottom: 10,
        width: screenWidth - 60,
        zIndex: 150,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
    },
    wishIcon: {
        top: 25,
        backgroundColor: whiteColor,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    txtSt: {
        fontFamily: Fonts.tajawalBold,
        color: 'rgba(0,0,0,0.7)',
        textAlign: 'left',
        fontSize: 16,
        paddingTop: 4
    },
    rowImageIcon: {
        width: 20,
        height: 20,
        tintColor: 'rgba(0,0,0,0.7)',
        marginHorizontal: 10,
    }
})