import Text from 'components/Text'
import { AvatarImage, isIOS, LinearXY, ThemeColors } from 'constant'
import React, { Fragment } from 'react'
import { Image, StyleSheet, View, FlatList, TouchableOpacity } from "react-native"
import { W } from "utils/responsive"
import ChatCart from './components/ChatCart'
import UilOut from '@iconscout/react-native-unicons/icons/uil-sign-out-alt'
import LinearGradient from 'react-native-linear-gradient'
import useUsersLogic from './hooks/useUsersLogic'

function Users(){
    const {myId,onLogoutClick,users} = useUsersLogic()
    return (
        <Fragment>
            <View style={[styles.header]}>
                <View style={styles.avatarWrap}>
                    <Image source={AvatarImage} style={styles.avatar} />
                    <View style={styles.avatarOnline} />
                </View>
                <Text medium size={28} align="center" color={ThemeColors.Primary}>Messages</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.searchBtn} onPress={onLogoutClick}>
                    <LinearGradient colors={[ThemeColors.PRIMARY_LIGHT, ThemeColors.PRIMARY_LINEAR_LIGHT]} {...LinearXY} style={[styles.searchLiner]}>
                        <UilOut color={ThemeColors.Primary} size={24} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <FlatList
                data={users.filter(a => a.uid !== myId)}
                contentContainerStyle={styles.scContainer}
                style={styles.sc}
                keyExtractor={(item) => item.uid}
                renderItem={({item}) => <ChatCart data={item} />}
                ItemSeparatorComponent={() => <View style={[styles.divider, styles.cardsDivider]} />}
            />
            
        </Fragment>
    )
}

const styles = StyleSheet.create({
    sc: {
        flex:1,
    },
    scContainer: {
        width: W(100),
        paddingBottom: W(30),
        paddingHorizontal: W(5),
        paddingTop: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: isIOS ? 50 : 10,
        paddingHorizontal: W(5)
    },
    avatarWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: W('15'),
        height: W('15'),
        resizeMode: 'contain',
        borderRadius: 15,
        borderTopRightRadius: 0
    },
    avatarOnline: {
        backgroundColor: ThemeColors.GREEN,
        width: 10,
        height: 10,
        position: 'absolute',
        top: -2,
        right: -2,
        borderRadius: 2,
        borderColor: 'white',
        borderWidth: 1
    },
    userWrap: {
        marginLeft:  12
    },
    searchBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchLiner:{ 
        width: W(12),
        height: W(12),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: ThemeColors.LinearBGEnd,
        marginTop: 24
    },
    cardsDivider: {
        marginVertical: 16
    }
})


export default Users