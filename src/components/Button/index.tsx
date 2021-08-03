import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {ThemeColors, LinearXY} from 'constant'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, View } from 'react-native'
import Text from 'components/Text'
import { H } from 'utils/responsive'
import Visible from 'components/Visible'

interface IButton {
    text: string,
    loading?: boolean
    disabled?: boolean
}

function Button(props: IButton & TouchableOpacityProps) {
    const {text, style, loading, disabled  ,...rest} = props
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.7} style={[styles.container,style, disabled ? {opacity: 0.5} : null]} {...rest}>
            <LinearGradient colors={[ThemeColors.Primary, ThemeColors.PrimaryLinear]} {...LinearXY} style={styles.linear}>
                <View style={styles.wrap}>
                    <Text color="white" bold size={16} align="center" >{text}</Text>
                    <Visible condition={Boolean(loading)}>
                        <ActivityIndicator color="white" size="small" style={{marginLeft: 10}} />
                    </Visible>

                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: H('8%'),
        borderRadius: 20,
    },
    linear: {
        flex: 1,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    wrap: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})


export default Button
