import { ParamListBase } from '@react-navigation/routers';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, ViewStyle } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { blackColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { PagePadding } from '../../constants/Page';
import { ICategory } from '../../types/API';
import { CategoriesStacParamList } from '../../types/Navigation';

interface ICategoriesListProps {
    categories: ICategory[],
    navigation?: StackNavigationProp<ParamListBase, string>,
    hideTitle?: boolean,
    style?: ViewStyle
}

const CategoriesList: React.FC<ICategoriesListProps> = (props) => {

    const {
        categories
    } = props

    const renderCategory = ({ item, index }: ListRenderItemInfo<ICategory>) => (
        <CategoryCard
            navigation={props.navigation}
            category={item}
        />
    )


    const ListHeaderComponent = () => {
        if (props.hideTitle) {
            return {}
        }

        return {
            ListHeaderComponent: () => <Text style={styles.listHeaderText}>{'Categories'}</Text>
        }
    }

    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={categories}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategory}
            contentContainerStyle={{
                paddingHorizontal: PagePadding,
                ...props.style
            }}
            {...ListHeaderComponent()}
        />
    )
};


const styles = StyleSheet.create({
    listHeaderText: {
        fontFamily: Fonts.tajawalBold,
        fontSize: 22,
        lineHeight: 30,
        color: blackColor,
        marginBottom: 5,
    }
});
export default CategoriesList;