import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { mainColor, whiteColor } from '../../constants/Colors';
import { ICart, IProduct } from '../../types/API';
import { ISystemState } from '../../types/Redux';
import Action from '../../redux/actions';
import { connect } from 'react-redux';


interface IAddToCartButtonsProps {
  product: IProduct,
  addToCart?: (product: IProduct, quantity: number) => void,
  Cart?: ICart,
  removeFromCart?: (product: IProduct) => void

}

const AddToCartButtons: React.FC<IAddToCartButtonsProps> = (props) => {

  const {
    product,
    Cart,
    addToCart,
    removeFromCart
  } = props

  const [quantity, setQuantity] = useState<number>(Cart?.products.find(item => item.productId == product.id)?.quantity! | 0)

  return (
    <View style={styles.btnsContainer}>

      <TouchableOpacity
        style={styles.leftBtnStyle}
        onPress={() => {

          setQuantity(pervQuantity => {
            addToCart && addToCart(product, pervQuantity + 1)
            return pervQuantity + 1
          })

        }}
      >
        <FontAwesome
          name="plus"
          color={whiteColor}
          size={20}
        />
      </TouchableOpacity>

      <Text style={styles.counterStyle} allowFontScaling={false}>
        {Cart?.products.find(item => item.productId == product.id)?.quantity! | 0}
      </Text>

      <TouchableOpacity
        disabled={quantity == 0}
        style={styles.rightBtnStyle}
        onPress={() => {

          if (quantity - 1 == 0) {

            setQuantity(pervQuantity => {
              removeFromCart && removeFromCart(product)
              return pervQuantity - 1
            })

          } else {
            setQuantity(pervQuantity => {
              addToCart && addToCart(product, pervQuantity - 1)
              return pervQuantity - 1
            })
          }
        }}
      >
        <FontAwesome
          name="minus"
          color={whiteColor}
          size={20}
        />
      </TouchableOpacity>
    </View>

  );

}

const mapDispacthToProps = (dispatch: any) => {
  const {
    addToCart,
    removeFromCart
  } = Action
  return {
    ...dispatch,
    addToCart: (product: IProduct, quantity: number) => addToCart(dispatch, product, quantity),
    removeFromCart: (product: IProduct) => removeFromCart(dispatch, product)
  };
};

const mapStateToProps = ({ Cart: { Cart } }: ISystemState) => ({
  Cart
});


export default connect(mapStateToProps, mapDispacthToProps)(AddToCartButtons);

const styles = StyleSheet.create({
  rightBtnStyle: {
    paddingVertical: 6,
    borderLeftColor: 'rgba(0,0,0,0.2)',
    borderLeftWidth: 0,
    paddingHorizontal: 10,
    backgroundColor: mainColor,
  },
  counterStyle: {
    marginHorizontal: 15,
    fontSize: 17,
    // fontFamily: 'Cairo-Bold',
  },
  leftBtnStyle: {
    borderRightColor: 'rgba(0,0,0,0.2)',
    borderRightWidth: 0,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: mainColor,
  },
  btnsContainer: {
    marginTop: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: mainColor,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
