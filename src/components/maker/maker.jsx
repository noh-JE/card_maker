import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../maker/maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Maker = ({authService}) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };
    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        })
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />

            <Footer />
        </section>
    );
};

export default Maker;