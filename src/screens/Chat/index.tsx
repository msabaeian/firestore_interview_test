import React from 'react'
import BackButton from 'components/BackButton'
import Text from 'components/Text'
import { LinearXY, ThemeColors } from 'constant'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { H, W } from 'utils/responsive'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import useChatLogic from './hooks/useChatLogic'


function Chat(){
    const {messages,onSend,myId,name} = useChatLogic()
    return (
        <LinearGradient colors={[ThemeColors.LinearBGStart, ThemeColors.LinearBGEnd]} {...LinearXY} style={styles.container}>
            <LinearGradient colors={[ThemeColors.LinearInputBorderStart, ThemeColors.LinearInputBorderEnd]} {...LinearXY} style={styles.header}>
                <View style={styles.backAvatarWrap}>
                    <BackButton sartColor={'white'} endColor={'white'} /> 
                    <Text size={18} bold color={ThemeColors.BLACK_GREY}>{name}</Text>
                    <View style={styles.empty} />
                </View>
            </LinearGradient>

            <View style={styles.giftedWrapper}>
                <GiftedChat
                    messages={messages}
                    onSend={onSend}
                    user={{
                        _id: myId
                    }} />
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: W(5),
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: H(18),
        alignItems: 'center',
        justifyContent: 'center'
    },
    backAvatarWrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    empty: {
        width: W("13"),
        height: W("13")
    },
    userWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    details: {
        marginLeft: 10
    },
    giftedWrapper: {
        flex: 1, 
        width: W(100)
    }
})

export default Chat