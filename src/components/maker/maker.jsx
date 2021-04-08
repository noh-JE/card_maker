import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../maker/maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'mong',
            company: 'samsung',
            theme: 'dark',
            email: 'ellie@ellie.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        {
            id: '2',
            name: 'mong',
            company: 'samsung',
            theme: 'light',
            email: 'ellie@ellie.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        },
        {
            id: '3',
            name: 'mong',
            company: 'samsung',
            theme: 'colorful',
            email: 'ellie@ellie.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null
        }
    ]);
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
    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor cards={cards} addCard={addCard} />
                    <Preview cards={cards} />
                </div>
            <Footer />
        </section>
    );
};

export default Maker;