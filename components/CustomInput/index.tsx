import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TextInputProps } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { mainColor } from '../../constants/Colors';

interface ICustomInputProps extends TextInputProps {
    title: string,
    Icon: () => JSX.Element
}

const CustomInput: React.FC<ICustomInputProps> = (props) => {

    const {
        title,
        Icon,
        ...restProps
    } = props

    return (
        <View style={styles.inputContainer}>

            <Text style={styles.inputTitle}>{title}</Text>
            <View style={styles.inputRow}>
                <Icon />

                <TextInput
                    {...restProps}
                    style={[styles.inputStyle, restProps.style]}
                />
            </View>

        </View>
    )
};
export default CustomInput


const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    inputStyle: {
        padding: 0,
        paddingLeft: 10,
        flex: 1,
    },
    inputTitle: {
        color: mainColor,
        fontSize: 15,
        marginBottom: 5,
        textAlign: 'left',
    },
    inputContainer: { marginBottom: 15 },
});