import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import CustomHeader from '../../components/CustomHeader';
import LazyContainer from '../../components/LazyContainer';
import { largePagePadding } from '../../constants/Page';
import { getAllCategories } from '../../services/Categories';
import { ICategory } from '../../types/API';
import { CategoriesStacParamList } from '../../types/Navigation';
import CategoriesList from '../Home/CategoriesList';

interface ICategoriesProps extends StackScreenProps<CategoriesStacParamList, 'Categories'> {

}

const Categories: React.FC<ICategoriesProps> = (props) => {

    const [categories, setCategories] = React.useState<ICategory[]>([])

    React.useEffect(() => {

        if (props.route?.params?.category) {

            // get Sub Categories
        } else {
            getAllCategories(Categories => { setCategories(Categories) })
        }

    }, [])

    return (
        <LazyContainer>

            <CustomHeader back logo />

            <CategoriesList
                categories={categories}
                hideTitle
                style={{ paddingTop: largePagePadding }}
                {...props}
            />

        </LazyContainer>
    )
};

export default Categories;