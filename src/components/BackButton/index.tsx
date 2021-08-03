import { useNavigation } from '@react-navigation/core';
import { LinearXY, ThemeColors } from 'constant';
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps , Image, GestureResponderEvent } from 'react-native'
import {H, W,} from 'utils/responsive'
import UilArrow from '@iconscout/react-native-unicons/icons/uil-arrow-left'
import LinearGradient from 'react-native-linear-gradient';

interface IBackButton {
    mt?: number|string
    mb?: number|string
    position?: boolean,
    sartColor?: string
    endColor?: string
}

const BackButton = (props: IBackButton & TouchableOpacityProps) => {
    const {style,sartColor,endColor,mt,mb,onPress,position, ...rest} = props;
    const marginTop = mt ? (typeof mt === "number" ? mt : W(mt)) : null
    const marginBottom = mb ? (typeof mb === "number" ? mb : W(mb)) : null
    const {goBack} = useNavigation()

    const handlePress = (event: GestureResponderEvent) => {
        if(onPress) return onPress(event)
        goBack()
    }

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={[styles.btn, {marginTop,marginBottom}, position ? styles.position : null ,style]} {...rest}>
            <LinearGradient colors={[sartColor || ThemeColors.LinearInputBorderStart, endColor || ThemeColors.LinearInputBorderEnd]} {...LinearXY} style={styles.iconWrap}>
                <UilArrow color={ThemeColors.BLACK_GREY} size={30} />
            </LinearGradient>
            {/* <Image source={require('assets/images/back_round.png')} style={styles.image} /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    iconWrap: {
        width: W("13"),
        height: W("13"),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    position: {
        position: 'absolute',
        left: 20,
        top: 45
    },
    
})


export default BackButton
