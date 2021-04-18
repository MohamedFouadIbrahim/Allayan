import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../common/Colors';
import ItemsCount from '../ItemsCount';
import { connect } from 'react-redux';

class CartIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0,
    };
  }

  componentDidMount = () => {
    const { cart } = this.props;
    // cart.cartItems.sort(function (a, b) {
    //   if (a.product.MasterItemID < b.product.MasterItemID) return 1;
    //   if (a.product.MasterItemID > b.product.MasterItemID) return -1;
    //   return 0;
    // });
    let newArray = 0;
    for (let i = 0; i < cart.cartItems.length; i++) {
      try {
        if (
          cart.cartItems[i]?.product.MasterItemID !=
          cart.cartItems[i + 1]?.product.MasterItemID
        )
          newArray++;
      } catch (er) { }
    }
    this.setState(
      {
        totalItems: newArray,
      },
      () => { },
    );
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.cart?.cartItems != this.props.cart?.cartItems) {
      const { cart } = this.props;
      cart.cartItems.sort(function (a, b) {
        if (a.product.MasterItemID < b.product.MasterItemID) return 1;
        if (a.product.MasterItemID > b.product.MasterItemID) return -1;
        return 0;
      });
      let newArray = 0;
      for (let i = 0; i < cart.cartItems.length; i++) {
        try {
          if (
            cart.cartItems[i]?.product.MasterItemID !=
            cart.cartItems[i + 1]?.product.MasterItemID
          )
            newArray++;
        } catch (er) { }
      }
      this.setState(
        {
          totalItems: newArray,
        },
        () => { },
      );
    }
  };

  render() {
    const { totalItems } = this.state;
    const { focused } = this.props;
    return (
      <View style={{ overflow: 'visible' }}>
        {totalItems > 0 && (
          <View
            style={{
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
            }}>
            <ItemsCount
              fontSize={totalItems >= 100 ? 8 : totalItems >= 10 ? 10 : 12}
              number={totalItems}
              size={18}
            />
          </View>
        )}
        <Image
          source={focused ? require('@images/buy.png') : require('@images/buyO.png')}
          style={[styles.iconStyle(focused), this.props.style]}
        />
      </View>
    );
  }
}

//make this component available to the app
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

const styles = StyleSheet.create({
  iconStyle: (focused) => {
    return {
      width: 22,
      height: 22,
      resizeMode: 'contain',
      tintColor: focused ? Colors.primary : Colors.TextMainColor,
    };
  },
});
