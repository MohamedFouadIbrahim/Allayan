import React, { useEffect, useState } from 'react';
import { ListRenderItemInfo, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartCard from '../../components/CartCard';
import CustomHeader from '../../components/CustomHeader';
import LazyContainer from '../../components/LazyContainer';
import { blackColor, mainColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { midPagePadding } from '../../constants/Page';
import { getProducts } from '../../services/Products';
import { ICart, IProduct, IProductInCart } from '../../types/API';
import { ISystemState } from '../../types/Redux';

interface ICartProps {
    Cart: ICart,
}

const Cart: React.FC<ICartProps> = (props) => {


    const {
        Cart,
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

    return (
        <LazyContainer>

            <CustomHeader logo />

            <FlatList
                data={Cart.products}
                renderItem={renderCartIem}
                keyExtractor={(item, index) => String(index)}
                ListEmptyComponent={() => (
                    <Text style={{ fontFamily: Fonts.tajawalBold, fontSize: 20, marginVertical: 10, color: mainColor }} >
                        {'No Item In Cart'}
                    </Text>
                )}
                ListHeaderComponent={() => {
                    if (Cart.products.length) {
                        return (
                            <Text style={{ fontFamily: Fonts.tajawalBold, fontSize: 30, marginVertical: 10, color: blackColor, paddingHorizontal: midPagePadding }} >
                                {'Cart'}
                            </Text>
                        )
                    }
                    return null
                }}
                contentContainerStyle={!Cart.products.length ? { justifyContent: 'center', flexGrow: 1, alignItems: 'center' } : {}}
            />

        </LazyContainer>
    )
};

const mapStateToProps = ({ Cart: { Cart } }: ISystemState) => ({
    Cart
});


export default connect(mapStateToProps)(Cart)