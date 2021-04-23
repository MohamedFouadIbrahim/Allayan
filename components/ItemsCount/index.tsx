import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';


interface IItemsCountProps {
  size: number, number: number, fontSize: number
}

const ItemsCount: React.FC<IItemsCountProps> = (props) => {

  const {
    size,
    number,
    fontSize
  } = props

  return (
    <View
      style={[styles.container, {
        width: size,
        height: size,
        borderRadius: size / 2,
      }]}
    >
      <Text
        style={{
          color: whiteColor,
          fontFamily: Fonts.primaryRegular,
          fontSize: fontSize,
          lineHeight: fontSize + 2,
        }}
      >
        {number}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 150,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
  }
})

export default ItemsCount;
