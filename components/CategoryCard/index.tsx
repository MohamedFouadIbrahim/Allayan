import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { blackColor, whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { screenWidth } from '../../constants/Page';
import { ICategory } from '../../types/API';
import CustomImage from '../CustomImage';


interface ICategoryCardProps {
    category: ICategory,
    navigation?: StackNavigationProp<ParamListBase, string>
}

const CategoryCard: React.FC<ICategoryCardProps> = (props) => {

    const {
        category,
    } = props;

    return (
        <TouchableOpacity
            onPress={() => {
                if (category.hasChildren) {
                    props.navigation?.push('Categories', { screen: 'Categories', params: { category } })
                } else {
                    props.navigation?.push('Products', { screen: 'Products', params: { category } })
                }
            }}

            style={[styles.serviceCatCardContainer]}

        >
            <CustomImage
                source={{ uri: category.images![Math.floor(Math.random() * 4)] }}
                fallback
                style={styles.serviceCatImage}
                resizeMode="cover"
            />
            <View style={styles.catNameContainer}>
                <Text style={styles.catName}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default CategoryCard;

// define your styles
const styles = StyleSheet.create({

    catName: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: blackColor,
        fontFamily: Fonts.tajawalBold,
    },
    serviceCatImage: {
        width: screenWidth * 0.45,
        height: screenWidth * 0.35,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    catNameContainer: {
        backgroundColor: '#fafafa',
        // paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        flex: 1,
        minHeight: 50,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceCatCardContainer: {
        marginVertical: 5,
        width: screenWidth * 0.45,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        borderRadius: 15,
        borderWidth: 0,
        backgroundColor: whiteColor,
    },
});
