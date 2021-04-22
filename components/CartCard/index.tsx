import * as React from 'react';
import { I18nManager, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SwipeRow } from 'react-native-swipe-list-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { PagePadding } from '../../constants/Page';
import { IProduct, IProductInCart } from '../../types/API';
import CustomImage from '../CustomImage';

interface ICartCardProps {
    CartItem: IProductInCart,
    Products: IProduct[]
}

const CartCard: React.FC<ICartCardProps> = (props) => {

    const {
        CartItem,
        Products = []
    } = props

    const currentProductsInCart = Products.filter(item => item.id == CartItem.productId);

    const renderProductsInCart = ({ item, index }: ListRenderItemInfo<IProduct>) => (

        <SwipeRow
            disableLeftSwipe={I18nManager.isRTL}
            disableRightSwipe={!I18nManager.isRTL}
            leftOpenValue={75}
            rightOpenValue={-75}
            closeOnRowPress
            useNativeDriver
            preview
            style={{
                marginVertical: PagePadding
            }}
        >
            <View style={styles.hiddenRow}>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <FontAwesome name="trash" size={30} color={'red'} />
                </TouchableOpacity>
            </View>

            <View style={styles.swipeCartItem} >

                <View >
                    <Text style={{ fontFamily: Fonts.tajawalBold, fontSize: 20, marginVertical: 10 }} >
                        {item?.title}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

                    <CustomImage
                        source={{ uri: item.image }}
                        style={{
                            width: 75,
                            height: 75,
                            marginRight: 5,
                        }}
                        resizeMode='contain'
                    />

                    <View>
                        <Text style={{ fontFamily: Fonts.tajawalBold, fontSize: 15 }} >
                            {`${item.price * CartItem?.quantity}  $`}
                        </Text>
                    </View>

                </View>

            </View>
        </SwipeRow>
    )

    return (

        <FlatList
            data={currentProductsInCart}
            renderItem={renderProductsInCart}
        />

    )
};

const styles = StyleSheet.create({
    hiddenRow: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 15,
    },
    swipeCartItem: {
        borderBottomWidth: 0,
        borderWidth: 0,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: whiteColor,
        // flexDirection: 'row',
        // alignItems: 'center',
        paddingHorizontal: PagePadding,
    },
})

export default CartCard