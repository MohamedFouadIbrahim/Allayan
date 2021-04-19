import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CustomHeader from '../../components/CustomHeader';
import LazyContainer from '../../components/LazyContainer';
import ProductCart from '../../components/ProductCart/inddex';
import { PagePadding } from '../../constants/Page';
import { getProductsByCategory } from '../../services/Products';
import { IProduct } from '../../types/API';
import { ProductsStacParamList } from '../../types/Navigation';

interface IProductsProps extends StackScreenProps<ProductsStacParamList, 'Products'> {

}

const Products: React.FC<IProductsProps> = (props) => {

    const [products, setProducts] = React.useState<IProduct[]>([])

    React.useEffect(() => {

        getProductsByCategory(props.route.params.category!, fetchedProducts => {
            setProducts(fetchedProducts);
        })

    }, [])

    const renderProduct = ({ item, index }: ListRenderItemInfo<IProduct>) => {

        return (
            <ProductCart
                index={String(index)}
                product={item}
                isLastItem={products.length == index + 1}
                {...props}
            />
        )
    }
    return (
        <LazyContainer>

            <CustomHeader back logo />

            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{
                    paddingTop: PagePadding
                }}
            />
        </LazyContainer>

    )
};

export default Products;