import React, { useEffect, useState } from 'react';
import LazyContainer from '../../components/LazyContainer';
import { getAllCategories } from '../../services/Categories';
import { categoriesType } from '../../types/API';

interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {

    const [categories, setCategories] = useState<categoriesType>([])

    useEffect(() => {

        getAllCategories(res => { setCategories(res.data) })

    }, [])

    return (
        <LazyContainer style={{ justifyContent: 'center', alignItems: 'center' }} >

        </LazyContainer>
    )
}

export default Home;