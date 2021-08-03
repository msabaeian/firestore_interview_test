import React, {useEffect} from 'react'
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { logout } from 'store/slices/userSlice'
import { useNavigation } from '@react-navigation/native'
import ResetScene from 'utils/resetScene'
import { saveUser, IUser } from 'store/slices/usersSlice'
import { RoutesName } from 'constant';

function useUsersLogic() {
    const users: IUser[] = useSelector<RootState>(state => state.users) as IUser[]
    const myId: string = useSelector<RootState>(state => state.user.uid) as string
    const dispatch = useDispatch()
    const {reset} = useNavigation()
    
    useEffect(() => {
        const subscriber = firestore()
        .collection('users')
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(documentSnapshot => {
                dispatch(saveUser({
                    name: documentSnapshot.data().name,
                    uid: documentSnapshot.id
                }))
            })
        });

        return () => subscriber();

    },[])

    const onLogoutClick = async () => {
        await auth().signOut()
        dispatch(logout())
        ResetScene(reset, RoutesName.LOGIN)
    }


    return {
        users,
        myId,
        onLogoutClick
    }
}

export default useUsersLogic
