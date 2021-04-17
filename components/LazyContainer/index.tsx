import * as React from 'react';
import { ViewProps, View, StyleSheet } from 'react-native';

interface ILazyContainerProps extends ViewProps {
}

const LazyContainer: React.FC<ILazyContainerProps> = ({ children, style, ...restProps }) => {

    return (
        <View style={[styles.container, style]} {...restProps} >
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default LazyContainer