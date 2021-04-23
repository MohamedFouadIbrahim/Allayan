import React, { useEffect, useState } from 'react';
import { I18nManager, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import CartCard from '../../components/CartCard';
import CustomHeader from '../../components/CustomHeader';
import LazyContainer from '../../components/LazyContainer';
import { blackColor, mainColor, whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { midPagePadding, PagePadding } from '../../constants/Page';
import { getProducts } from '../../services/Products';
import { ICart, IProduct, IProductInCart } from '../../types/API';
import { ISystemState } from '../../types/Redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Action from '../../redux/actions';

interface ICartProps {
    Cart: ICart,
    emptyCart?: () => void
}

const Cart: React.FC<ICartProps> = (props) => {

    const {
        Cart,
        emptyCart
    } = props

    const [Products, setProduct] = useState<IProduct[]>([])

    useEffect(() => {
        getProducts(Products => { setProduct(Products) })
    }, [])

    const renderCartIem = ({ item, index }: ListRenderItemInfo<IProductInCart>) => (
        <CartCard
            CartItem={item}
            Products={Products}
        />
    )

    const renderCheckoutButton = () => {
        if (Cart.products.length) {
            return (
                <TouchableOpacity
                    style={styles.nextBtn}
                    activeOpacity={0.5}
                    onPress={() => { emptyCart && emptyCart() }}
                >
                    <Text style={styles.nextBtnTxt}>{'Checkout'}</Text>
                    <MaterialCommunityIcons
                        name={I18nManager.isRTL ? 'arrow-left-box' : 'arrow-right-box'}
                        color={Colors.white}
                        size={22}
                    />
                </TouchableOpacity>
            )
        }
    }

    const renderListEmptyComponent = () => {
        return (
            <Text style={{ fontFamily: Fonts.tajawalBold, fontSize: 20, marginVertical: 10, color: mainColor }} >
                {'No Item In Cart'}
            </Text>
        )
    }

    const renderListHeaderComponent = () => {
        if (Cart.products.length) {
            return (
                <Text style={{ fontFamily: Fonts.tajawalBold, fontSize: 30, marginVertical: 10, color: blackColor, paddingHorizontal: midPagePadding }} >
                    {'Cart'}
                </Text>
            )
        }
        return null
    }

    return (
        <LazyContainer>

            <CustomHeader logo />

            <FlatList
                data={Cart.products}
                renderItem={renderCartIem}
                keyExtractor={(item, index) => String(index)}
                ListEmptyComponent={renderListEmptyComponent}
                ListHeaderComponent={renderListHeaderComponent}
                contentContainerStyle={!Cart.products.length ? { justifyContent: 'center', flexGrow: 1, alignItems: 'center' } : {}}
            />

            {renderCheckoutButton()}

        </LazyContainer>
    )
};

const mapStateToProps = ({ Cart: { Cart } }: ISystemState) => ({
    Cart
});

const mapDispacthToProps = (dispatch: any) => {
    const {
        emptyCart
    } = Action
    return {
        ...dispatch,
        emptyCart: () => emptyCart(dispatch)
    };
};

const styles = StyleSheet.create({
    nextBtn: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 5,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: mainColor,
        flexDirection: 'row',
        minWidth: '45%',
        margin: PagePadding
    },
    nextBtnTxt: {
        color: whiteColor,
        fontFamily: Fonts.tajawalRegular,
        fontSize: 18,
        marginRight: 5,
        marginTop: 5
    },
})

export default connect(mapStateToProps, mapDispacthToProps)(Cart)