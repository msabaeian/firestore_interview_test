import auth from '@react-native-firebase/auth';

class Firebase {
    constructor() {
        // this.checkUserAuth()
    }

    login(username: string){
        auth()
        .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
        .then((e) => {
            e.user.uid
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });

    }

}

export default Firebase