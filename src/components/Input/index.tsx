import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput as T, StyleProp, ViewStyle, TextInputProps, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { LinearXY, ThemeColors } from 'constant'
import { Font, FontBold } from 'constant/fonts'
import { H, W } from 'utils/responsive';
import Text from 'components/Text';
import LinearGradient from 'react-native-linear-gradient';
import UilTimes from '@iconscout/react-native-unicons/icons/uil-times'
import UilCheck from '@iconscout/react-native-unicons/icons/uil-check'
import UilEye from '@iconscout/react-native-unicons/icons/uil-eye'
import UilEyeSlash from '@iconscout/react-native-unicons/icons/uil-eye-slash'

interface IInput {
    onChangeText?: (text: string) => void,
    value?: string,
    style?: StyleProp<ViewStyle>
    width?: string|number
    height?: string|number
    title?: string
    border?: boolean
    mt?: number|string
    mb?: number|string
    cmt?: number|string
    cmb?: number|string
    error?: boolean
    errorText?: string
    success?: boolean
    successText?: string
}

function Input(props: IInput&TextInputProps) {
    const { width,height,value,border,success,error,errorText,successText,onChangeText,secureTextEntry,style,title,mt,mb,cmb,cmt,...rest } = props
    const w = width ? (typeof width === "number" ? width : W(width)) : null;
    const h = height ? (typeof height === "number" ? height : H(height)) : null;
    const marginTop = mt ? (typeof mt === "number" ? mt : W(mt)) : null
    const marginBottom = mb ? (typeof mb === "number" ? mb : W(mb)) : null
    
    const inputRef = useRef(null)
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [isSecure, setisSecure] = useState(secureTextEntry)

    const onFocus = () => setIsFocus(true)

    const onBlur = () => setIsFocus(false)

    const onTitleClick = () => {
        inputRef.current.focus()
    }

    const toggleSecure = () => setisSecure(curr => !curr)

    let colors = [ThemeColors.LinearInputBorderStart, ThemeColors.LinearInputBorderEnd]
    if(error) colors = [ThemeColors.TRANSPARENT , ThemeColors.TRANSPARENT]
    if(success) colors = [ThemeColors.TRANSPARENT , ThemeColors.TRANSPARENT]

    const maskInputChange = (formatted: string, extracted: string|undefined) => {
        if(onChangeText && extracted) onChangeText(extracted)
    }
    function renderInp(){

        return (
            <T
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid={'transparent'}
                placeholderTextColor="#828282"
                onFocus={onFocus}
                onBlur={onBlur}
                style={[
                    styles.titleInput,
                    rest.multiline ? styles.multiline : null, 
                    style,
                    w ? {width: w} : null,
                    h ? {height:h, minHeight:h} : null,
                    marginTop ? {marginTop} : null,
                    marginBottom ? {marginBottom} : null,
                    isFocus ? styles.focus : null,
                    error ? {borderColor: ThemeColors.RED, borderWidth: 2}  : null,
                    success ? {borderColor: ThemeColors.GREEN, borderWidth: 2}  : null
                ]} 
                ref={inputRef}
                secureTextEntry={isSecure}
                {...rest}/>
        )
    }
    const inp =(
            <LinearGradient colors={colors} {...LinearXY} style={styles.container}>
                    {renderInp()}
                    {error || success ? 
                        <View style={styles.rightContent}>
                            {error ? <UilTimes key="times" size='30' color={ThemeColors.RED} /> : <UilCheck key="check" size="30" color={ThemeColors.GREEN} /> }
                        </View>
                    : null}
                    {secureTextEntry ? 
                        <TouchableOpacity activeOpacity={0.7} onPress={toggleSecure} style={[styles.rightContent, styles.toggleSecure]}>
                            {isSecure ? <UilEyeSlash key="secure" size="30" color={ThemeColors.TEXT_GREY} /> : <UilEye key="notSecure" size="30" color={ThemeColors.TEXT_GREY} /> }
                        </TouchableOpacity>
                    : null}
            </LinearGradient>
    )

    if(title){
        const CmarginTop = cmt ? (typeof cmt === "number" ? cmt : W(cmt)) : null
        const CmarginBottom = cmb ? (typeof cmb === "number" ? cmb : W(cmb)) : null
        return (
            <View style={[styles.withTitle, CmarginTop && {marginTop:CmarginTop}, CmarginBottom && {marginBottom:CmarginBottom}]}>
                <TouchableWithoutFeedback onPress={onTitleClick}>
                    <Text color="#3a4a4a" bold size={18} style={styles.title}>{title}</Text>
                </TouchableWithoutFeedback>
                {inp}
                {(error && errorText) || (success && successText) ? 
                <Text mt={6} color={success ? ThemeColors.GREEN : ThemeColors.RED}>{error ? errorText : successText}</Text>
                : null}
            </View>
        )
    }

    return inp
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 2,
        minHeight: H('8%'),
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    titleInput: {
        ...Font,
        // borderColor: Colors.Greyish,
        // borderWidth: 1,
        borderRadius: 20,
        textAlign: 'left',
        paddingHorizontal: 16,
        paddingVertical: 0,
        fontSize: 16,
        flex: 1,
        backgroundColor: 'transparent',
        color: "#3a4a4a",
        // padding
    },
    multiline: {
        textAlignVertical: 'top',
        paddingVertical: 10
    },
    withTitle:{
        width: '100%',
    },
    title:{
        marginBottom: 6,
        color: "#3a3a3a"
    },
    focus: {
        backgroundColor: "white"
    },
    rightContent: {
        position: 'absolute',
        right: W('5'),
        width: W('7'),
        height: W('7'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    toggleSecure: {
        backgroundColor: 'white',
        right: W('3'),
        width: W('12'),
        height: W('12'),
        borderRadius: 20
    }
});

export default Input;