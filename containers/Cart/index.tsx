import React, { useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartCard from '../../components/CartCard';
import LazyContainer from '../../components/LazyContainer';
import { largePagePadding } from '../../constants/Page';
import Action from '../../redux/actions';
import { getProducts } from '../../services/Products';
import { ICart, IProduct, IProductInCart } from '../../types/API';
import { ISystemState } from '../../types/Redux';

interface ICartProps {
    Cart: ICart,
    addToCart: (cart: ICart) => void
}

const Cart: React.FC<ICartProps> = (props) => {


    const {

        Cart,
        addToCart
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

            <FlatList
                data={Cart.products}
                renderItem={renderCartIem}
                contentContainerStyle={{ paddingTop: largePagePadding }}
                keyExtractor={(item, index) => String(index)}
            />

        </LazyContainer>
    )
};

const mapDispacthToProps = (dispatch: any) => {
    const {
        addToCart
    } = Action
    return {
        ...dispatch,
        addToCart: (cart: ICart) => addToCart(dispatch, cart)
    };
};

const mapStateToProps = ({ Cart: { Cart } }: ISystemState) => ({
    Cart
});


export default connect(mapStateToProps, mapDispacthToProps)(Cart)