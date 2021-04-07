/*
* AuthService는 어플리케이션에서 사용자가 로그인, 로그아웃 등 authentication에 관련된 일을 하는 클래스
*/
import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }
}

export default AuthService;