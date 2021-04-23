import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mainColor, whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import CartIcon from '../CartIcon';

interface ICustomHeaderProps extends ViewProps {
  back?: boolean,
  onBack?: () => void,
  title?: string,
  logo?: boolean,
}

const CustomHeader: React.FC<ICustomHeaderProps> = (props) => {

  const {


  } = props

  const navigation = useNavigation()

  return (
    <View >

      <View
        style={[
          styles.container,
          props.style,
          props.back && Platform.OS == 'android' && { paddingBottom: 0, paddingLeft: 0 },
        ]}
        onLayout={props.onLayout}
      >

        {props.back && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
              props.onBack && props.onBack()
            }}
            style={{ flex: 0.2 }}
          >
            <Ionicons name='arrow-back' size={25} color={mainColor} />
          </TouchableOpacity>

        )}

        {props.logo && <View
          style={{
            flex: 1,
            justifyContent: props.back ? 'center' : 'flex-start',
            flexDirection: 'row'
          }}>
          <Image
            source={require('../../assets/Images/new_logo.png')}
            style={{
              width: 100,
              height: 70 / 1.7,
              resizeMode: 'contain',
            }}
          />
        </View>}

        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            // paddingTop: props.logo ? 15: 0
          }}>

          <TouchableOpacity
            style={{
              paddingLeft: 10,
            }}
            onPress={() => { }}
          >
            <AntDesign name="search1" size={25} color={mainColor} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingLeft: 10,
              zIndex: 150000,
            }}
            onPress={() => { 
              navigation.navigate('CartTab')
            }}
          >

            <CartIcon />
          </TouchableOpacity>
          
        </View>
      </View>

      {props.title && (
        <View
          style={{
            elevation: 5,
            backgroundColor: whiteColor,
            borderWidth: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1,
            zIndex: 150,
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: Fonts.tajawalRegular,
              color: mainColor,
              fontSize: 20,
              textAlign: 'center',
            }}>
            {props.title}
          </Text>
        </View>
      )}

    </View>
  )
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: whiteColor,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 150,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      // ios: isIphoneX() ? 50 : 35,
    }),
    paddingHorizontal: 15,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
