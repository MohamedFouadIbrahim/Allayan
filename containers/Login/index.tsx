import * as React from 'react';
import { Controller, FieldValues, useForm, DeepMap, FieldError } from 'react-hook-form';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../components/CustomInput';
import { mainColor, whiteColor } from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { screenHeight, screenWidth } from '../../constants/Page';

interface ILoginProps {
}

const Login: React.FC<ILoginProps> = (props) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmitSucess = (data: FieldValues) => {

        console.log('sucess', data)
    };


    const onSubmitFail = (data: DeepMap<FieldValues, FieldError>) => {

        console.log('err', data)

    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >

                <View style={styles.logoContainer} >

                    <Image
                        source={require('../../assets/Images/new_logo.png')}
                        style={styles.logo}
                    />

                </View>


                <View style={styles.loginCard} >

                    <Text style={[styles.loginText, { color: 'gray' }]} >Login</Text>

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                            <CustomInput
                                Icon={() => <FontAwesome name="user" color={'gray'} size={18} />}
                                title='Email'
                                onChangeText={(email) => onChange(email)}
                                value={value}
                                onBlur={onBlur}
                            />
                        )}
                        name="Email"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                            <CustomInput
                                Icon={() => <FontAwesome name="lock" color={'gray'} size={18} />}
                                title='Passord'
                                onChangeText={(Passord) => onChange(Passord)}
                                value={value}
                                onBlur={onBlur}
                            />
                        )}
                        name="Passord"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={handleSubmit(onSubmitSucess, onSubmitFail)}
                    >
                        <Text style={styles.loginText} >Login</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>



        </ScrollView>
    )

};

export default Login


const styles = StyleSheet.create({
    loginCard: {
        top: (-20),
        overflow: 'visible',
        zIndex: 1500,
        width: screenWidth * 0.8,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: whiteColor,
        // backgroundColor: 'red',
        // paddingHorizontal: largePagePadding,
        // paddingVertical: PagePadding,
        alignSelf: 'center',
        padding: 20,
        paddingBottom: 40
    },

    loginText: {
        color: whiteColor,
        fontSize: 18,
        alignSelf: 'center',
        fontFamily: Fonts.tajawalBold,
    },
    logoContainer: {
        height: screenHeight / 2,
        width: screenWidth,
        backgroundColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        tintColor: whiteColor,
        width: screenWidth * 0.6,
        height: (screenWidth * 0.6) / 1.8,
        resizeMode: 'contain'
    },
    loginBtn: {
        position: 'absolute',
        bottom: -20,
        borderRadius: 25,
        overflow: 'visible',
        height: 50,
        justifyContent: 'center',
        backgroundColor: mainColor,
        elevation: 5,
        zIndex: 1500,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
});
