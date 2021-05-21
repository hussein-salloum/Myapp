import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';

function LoginScreen(props) {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        logIn(result.data);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label('email'),
        password: Yup.string().required().min(4).label('Password')
    })

    return (
        <Screen style={styles.container}>
           <Image style={styles.logo} source={require("../assets/logo-red.png")} />

           <AppForm
            initialValues= {{ email: "", password: "" }}
            onSubmit= {handleSubmit}
            validationSchema = {validationSchema}
           >
                    <ErrorMessage error="Invalid email and/or Password." visible={loginFailed} />
                    <AppFormField
                    name="email"
                    autoCapitalize="none" 
                    autoCorrect={false}
                    icon= "email"
                    KeyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                    />
                    <AppFormField
                    name="password"
                    autoCapitalize="none" 
                    autoCorrect={false}
                    icon= "lock"
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                    />
                    <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30,
    }
})

export default LoginScreen;