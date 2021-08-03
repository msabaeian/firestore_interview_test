import { useState } from 'react'
import { RoutesName } from 'constant'
import { useNavigation } from '@react-navigation/core'
import ResetScene from 'utils/resetScene'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux'
import { saveUser } from 'store/slices/userSlice'
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import store from 'store';

function useLoginLogic() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {reset} = useNavigation()

    useEffect(() => {
        const authListener = auth().onAuthStateChanged((user) => {
            if (user) {
                dispatchUser(user)
            }
        });

        return authListener()
    },[name])

    const onChange = (key: "email"|"password"|"name") => (e: string) => {
        switch (key){
            case "email":
                setEmail(e)
                break;
            case "password":
                setPassword(e)
                break;
            case "name":
                setName(e)
                break;
        }
    }

    const dispatchUser = async (data: FirebaseAuthTypes.User) => {
        // fix firebase listener multiple times calling issue
        if(store.getState().user.uid) return;

        dispatch(saveUser({ email:  data.email as string, uid: data.uid }))
        const user = await firestore().collection("users").doc(data.uid).get()
        
        firestore().collection("users").doc(data.uid).set({
            name: name || user.data().name as string
        })
        ResetScene(reset, RoutesName.USERS)
    }

    const onSubmit = async () => {
        setLoading(true)
        try{
            await auth().createUserWithEmailAndPassword(email, password)
        }catch(error){
            console.log("error => ",error)
            if (error.code === 'auth/email-already-in-use') {
                auth().signInWithEmailAndPassword(email, password)
            }
          
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            
        }
        
        setLoading(false)
    }

    return {
        onSubmit,
        loading,
        onChange,
        name,
        password,
        email
    }
}

export default useLoginLogic
