import React, {useEffect} from 'react'
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../../../App'
import firestore from '@react-native-firebase/firestore';
import { clear, saveMessage } from 'store/slices/chatSlice'
import { IMessage } from 'react-native-gifted-chat'
import { RoutesName } from 'constant'


type ProfileScreenNavigationProp = RouteProp<RootStackParamList,RoutesName.CHAT>

function useChatLogic() {
    const {params} = useRoute<ProfileScreenNavigationProp>()
    const myId: string = useSelector<RootState>(state => state.user.uid) as string
    const messages: IMessage[] = useSelector<RootState>(state => state.chat) as IMessage[]
    const dispatch = useDispatch()
    const membersString = [myId,params.data.uid].sort().join("_")

    useEffect(() => {
        const subscriber = firestore()
            .collection('messages')
            .where('membersString', "==", membersString)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach(documentSnapshot => {
                    const data = documentSnapshot.data()
                    dispatch(saveMessage({
                        _id: documentSnapshot.id,
                        createdAt: data.createdAt ? data.createdAt.toDate().getTime() : Date.now(),
                        user: {
                            _id: data.from,
                            name: params.data.name
                        },
                        text: data.message
                    }))
                })
            });
        return () => {
            subscriber()
            dispatch(clear())
        }
    }, [])

    const onSend = async (messages: IMessage[]) => {
        if(!messages.length) return
        firestore()
        .collection('messages')
        .doc()
        .set({
            from: myId,
            to: params.data.uid,
            message: messages[0].text as string,
            membersString,
            createdAt: firestore.FieldValue.serverTimestamp()
        })
    }


    return {
        onSend,
        messages,
        myId,
        name: params.data.name
    }
}

export default useChatLogic
