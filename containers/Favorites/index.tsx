import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import LazyContainer from '../../components/LazyContainer';
import { IProduct } from '../../types/API';
import { ISystemState } from '../../types/Redux';
import ProductCart from '../../components/ProductCart/inddex';
import { ListRenderItemInfo } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { FavoritesStackParamList } from '../../types/Navigation';
import CustomHeader from '../../components/CustomHeader';

interface IFavoritesProps extends StackScreenProps<FavoritesStackParamList> {
    Products: IProduct[]
}

const Favorites: React.FC<IFavoritesProps> = (props) => {

    const {
        Products
    } = props

    const renderProduct = ({ item, index }: ListRenderItemInfo<IProduct>) => (

        <ProductCart
            index={String(index)}
            product={item}
            isLastItem={Products.length == index + 1}
            {...props}
        />

    )
    return (

        <LazyContainer>

            <CustomHeader logo />
            
            <FlatList
                data={Products}
                renderItem={renderProduct}
                keyExtractor={(item, index) => `${String(index)}${item.title}`}
            />

        </LazyContainer>
    )
};


const mapStateToProps = ({ Favotites: { Products } }: ISystemState) => ({
    Products
});


export default connect(mapStateToProps)(Favorites);