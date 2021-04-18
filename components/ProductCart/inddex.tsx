import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { normalText, secondColor } from '../../constants/Colors';
import { screenWidth } from '../../constants/Page';
import { IProduct } from '../../types/API';
import AddToCartButtons from '../AddToCartButtons';
import WishListIcon from '../WishListIcon';


interface IProductCartProps {
    product: IProduct,
    isLastItem: boolean,
    index: string,
    navigation?: StackNavigationProp<ParamListBase, string>
}

const ProductCart: React.FC<IProductCartProps> = (props) => {

    const {
        product,
        isLastItem,
        index,
        navigation
    } = props;

    return (
        <TouchableOpacity
            style={[styles.prodRow, isLastItem && { borderBottomWidth: 0 }]}
            onPress={() => {

                // Still In Working 

                //   navigation.navigate('DetailScreen', {
                //     product: product,
                //   });

            }}>

            <Image
                source={{ uri: product.image }}
                defaultSource={require('../../assets/Images/placeholder.png')}
                style={styles.prodImg}
            />

            <View
                style={{
                    flex: 1,
                    marginLeft: 10,
                }}>

                <Text style={styles.productName} numberOfLines={2}>
                    {product.title?.trim()}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.priceStyle}>
                        {`${product.price}  $`}
                    </Text>
                </View>

                <AddToCartButtons
                    product={product}
                />

            </View>

            <TouchableOpacity style={{}} onPress={() => { }}>
                <WishListIcon
                    product={product}
                    selected={false}
                />
            </TouchableOpacity>


        </TouchableOpacity>
    );
}




export default ProductCart;

const styles = StyleSheet.create({
    priceTag: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: secondColor,
        marginRight: 5,
    },
    favouriteImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    favouriteBtn: {
        position: 'absolute',
        bottom: 10,
        right: 5,
        zIndex: 55,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    perPeice: {
        // fontFamily: fonts.cairoRegular,
        fontSize: 16,
    },
    priceStyle: {
        fontSize: 16,
        // fontFamily: fonts.cairoRegular,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    productName: {
        fontSize: 17,
        textAlign: 'left',
        // fontFamily: fonts.cairoBold,
        color: normalText,
        lineHeight: 27,
        paddingHorizontal:5
    },
    prodImg: {
        width: screenWidth * 0.3,
        height: screenWidth * 0.3,
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    prodRow: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingRight: 0,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
});
