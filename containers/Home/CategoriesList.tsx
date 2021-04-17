import * as React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { blackColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { PagePadding } from '../../constants/Page';
import { ICategory } from '../../types/API';

interface ICategoriesListProps {
    categories: ICategory[]
}

const CategoriesList: React.FC<ICategoriesListProps> = (props) => {

    const {
        categories
    } = props

    const renderCategory = ({ item, index }: ListRenderItemInfo<ICategory>) => (
        <CategoryCard
            // navigation={this.props.navigation}
            category={item}
        />
    )

    return (
        <FlatList
            ListHeaderComponent={() => <Text style={styles.listHeaderText}>{'Categories'}</Text>}
            keyExtractor={(item, index) => index.toString()}
            data={categories}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategory}
            contentContainerStyle={{
                paddingHorizontal: PagePadding
            }}
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