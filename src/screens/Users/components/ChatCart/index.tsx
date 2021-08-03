import { TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RoutesName, ThemeColors } from 'constant'
import { IUser } from 'store/slices/usersSlice'
import { W } from 'utils/responsive'
import { RootStackParamList } from '../../../../../App'
import Text from 'components/Text'
import React from 'react'

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,RoutesName.CHAT>

function ChatCart({data}: {data: IUser}){
    const {navigate} = useNavigation<ProfileScreenNavigationProp>()
    const onPress = () => navigate(RoutesName.CHAT, {data})
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <Image source={require('assets/images/empty_avatar.png')} style={styles.avatar} />
            <View style={styles.title}>
                <Text medium numberOfLines={1} size={18} color={ThemeColors.BLACK_GREY}>{data.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    avatar: {
        width: W('13'),
        height: W('13'),
        resizeMode: 'cover',
        borderRadius: 8,
    },
    title: {
        marginLeft: 10,
        width: '60%',

    },
    details: {
        marginLeft: 'auto',
        height: '100%',
    },
    unreadCount: {
        width: W(6),
        height: W(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginTop: 10,
        borderRadius: 5
    }
})

export default ChatCart