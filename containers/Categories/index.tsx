import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import CustomHeader from '../../components/CustomHeader';
import LazyContainer from '../../components/LazyContainer';
import { largePagePadding } from '../../constants/Page';
import { getAllCategories } from '../../services/Categories';
import { ICategory } from '../../types/API';
import CategoriesList from '../Home/CategoriesList';

interface ICategoriesProps {

}

const Categories: React.FC<ICategoriesProps> = (props) => {

    const [categories, setCategories] = React.useState<ICategory[]>([])

    React.useEffect(() => {

        getAllCategories(Categories => { setCategories(Categories) })

    }, [])
    
    return (
        <LazyContainer>

            <CustomHeader back />

            <CategoriesList
                categories={categories}
                hideTitle
                style={{ paddingTop: largePagePadding }}
            />

        </LazyContainer>
    )
};

export default Categories;