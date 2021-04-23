import React from 'react';
import { Image, ImageStyle, StyleSheet, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { mainColor, whiteColor } from '../../constants/Colors';
import { ICart } from '../../types/API';
import { ISystemState } from '../../types/Redux';
import ItemsCount from '../ItemsCount';

interface ICartIconProps {
}

const CartIcon: React.FC<ICartIconProps> = (props) => {

  const Cart = useSelector<ISystemState>((state) => state.Cart.Cart) as ICart // state without connect

  return (
    <View >

      {Cart.products.length > 0 && (
        <View style={styles.container} >

          <ItemsCount
            fontSize={Cart.products.length >= 100 ? 8 : Cart.products.length >= 10 ? 10 : 12}
            number={Cart.products.length}
            size={18}
          />

        </View>
      )}

      <Image
        source={require('../../assets/Images/buyO.png')}
        style={styles.iconStyle}
      />

    </View>
  )
};

export default CartIcon;

const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: mainColor,
  },
  container: {
    position: 'absolute',
    top: -5,
    right: -10,
    zIndex: 150,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    overflow: 'visible',
  }
});
