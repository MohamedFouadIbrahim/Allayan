import React from 'react';
import { View, Text } from 'react-native';
import LazyContainer from '../../components/LazyContainer';

interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {

    return (
        <LazyContainer style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontFamily: 'Lato-Regular' }} >
                Home
            </Text>
        </LazyContainer>
    )
}

export default Home;