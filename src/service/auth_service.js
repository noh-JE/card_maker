/*
* AuthService는 어플리케이션에서 사용자가 로그인, 로그아웃 등 authentication에 관련된 일을 하는 클래스
*/
import firebase from 'firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;