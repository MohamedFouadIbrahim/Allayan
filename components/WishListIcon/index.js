import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

class WishListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addToWishList() {
    const {product, user, addWishListItem} = this.props;
    addWishListItem(product, user);
    this.props.onAddFavourite();
  }

  render() {
    const {product, selected} = this.props;
    return (
      <TouchableOpacity
        style={styles.favouriteBtn}
        onPress={() => {
          this.addToWishList();
        }}>
        <Image
          source={
            selected
              ? require('@images/heart.png')
              : require('@images/heartO.png')
          }
          style={[styles.favouriteImg, selected && {tintColor: 'red'}]}
        />
      </TouchableOpacity>
    );
  }
}

//make this component available to the app
// const mapStateToProps = ({}) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('../../reducers/WishListRedux');
  return {
    ...dispatch,
    addWishListItem: (product, user) => {
      actions.addWishListItem(dispatch, product, user);
    },
    removeWishListItem: (product, user) => {
      actions.removeWishListItem(dispatch, product, user);
    },
  };
};

export default connect(null, mapDispatchToProps)(WishListIcon);

const styles = StyleSheet.create({
  favouriteImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  favouriteBtn: {},
});
