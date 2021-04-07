import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({authService}) => {
    const history = useHistory();
    //로그인 성공 시, maker 페이지로 이동
    const goToMaker = userId => {
        // 사용자와 관련된 정보를 같이 전달
        history.push({
            pathname: '/maker',
            state: {id: userId},
        });
    };
    
    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            // .then(console.log);
            .then(data => goToMaker(data.user.uid));
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.id);
        })
    });

    return (
        <section>
            <Header />
            <section className={styles.login}>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;