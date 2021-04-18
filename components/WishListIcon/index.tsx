import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IProduct } from '../../types/API';

interface IWishListIcon {
  product: IProduct,
  selected: boolean,
  onAddFavourite?: () => void
}

const WishListIcon: React.FC<IWishListIcon> = (props) => {

  const { product, selected, onAddFavourite } = props;

  const addToWishList = () => {

    onAddFavourite && onAddFavourite()
  }
  return (
    <TouchableOpacity
      style={styles.favouriteBtn}
      onPress={() => { addToWishList() }}>
      <Image
        source={
          selected
            ? require('../../assets/Images/heart.png')
            : require('../../assets/Images/heartO.png')
        }
        style={[styles.favouriteImg, selected && { tintColor: 'red' }]}
      />
    </TouchableOpacity>
  )
}


export default WishListIcon;

const styles = StyleSheet.create({
  favouriteImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  favouriteBtn: {},
});
