import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { mainColor, whiteColor } from '../../constants/Colors';
import { IProduct } from '../../types/API';


interface IAddToCartButtonsProps {
  product: IProduct
}

const AddToCartButtons: React.FC<IAddToCartButtonsProps> = (props) => {

  return (
    <View style={styles.btnsContainer}>
      
      <TouchableOpacity
        style={styles.leftBtnStyle}
        onPress={() => {

        }}>
        <FontAwesome
          name="plus"
          color={whiteColor}
          size={20}
        />
      </TouchableOpacity>

      <Text style={styles.counterStyle} allowFontScaling={false}>
        {0}
      </Text>

      <TouchableOpacity
        style={styles.rightBtnStyle}
        onPress={() => { }}>
        <FontAwesome
          name="minus"
          color={whiteColor}
          size={20}
        />
      </TouchableOpacity>
    </View>

  );

}

export default AddToCartButtons;

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
