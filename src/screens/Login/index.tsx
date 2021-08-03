import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import { isAndroid, LinearBG } from 'constant';
import React from 'react'
import { StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { H, W } from 'utils/responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useLoginLogic from './hooks/useLoginLogic';

function Login(){
    const {loading,onChange,onSubmit,name,email,password} = useLoginLogic()

    return (
        <LinearGradient colors={LinearBG.colors} start={LinearBG.start} end={LinearBG.end} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <KeyboardAwareScrollView style={{width: '100%'}}>
                <Image source={require('assets/images/logo_rounded.png')} style={styles.logo} resizeMode="contain" />
                <Text bold mt={24} size={48}>Welcome to</Text>
                <Image source={require('assets/images/logo_typo.png')} style={styles.logoTypo} resizeMode="contain" />
                <Input value={name} onChangeText={onChange("name")} title="Name" placeholder="Name" cmt={40} />
                <Input value={email} onChangeText={onChange("email")} title="Email" placeholder="Username" cmt={24} />
                <Input value={password} onChangeText={onChange("password")} title="Password" placeholder="***" cmt={24} secureTextEntry/>
            </KeyboardAwareScrollView>
            
            <SafeAreaView>
                <Button disabled={loading || !name || !password || !email} loading={loading} onPress={onSubmit} text="Signin/Signup" style={styles.button} />
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (StatusBar.currentHeight || 0) + H(5),
        paddingHorizontal: 32,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    logo: {
        width: W('18%'),
        height: W('18%'),
    },
    logoTypo: {
        width: W("40"),
        height: W("15")
    },
    button: {
        marginBottom: isAndroid ? 20 : 0
    }
})


export default Login
