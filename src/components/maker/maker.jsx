import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../maker/maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService}) => {
    const [cards, setCards] = useState({
        //objedt 형태로 관리
        '1': {
            id: '1',
            name: 'mong',
            company: 'samsung',
            theme: 'dark',
            email: 'ellie@ellie.com',
            message: 'go for it',
            fileName: null,
            fileURL: null
        },
        '2': {
            id: '2',
            name: 'mong',
            company: 'samsung',
            theme: 'light',
            email: 'ellie@ellie.com',
            message: 'go for it',
            fileName: null,
            fileURL: null
        },
        '3': {
            id: '3',
            name: 'mong',
            company: 'samsung',
            theme: 'colorful',
            email: 'ellie@ellie.com',
            message: 'go for it',
            fileName: null,
            fileURL: null
        }
    });

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
    // const addCard = (card) => {
    //     const updated = [...cards, card];
    //     setCards(updated);
    // };
    const createOrupdatedCard = (card) => {
        // const updated = {...cards};
        // updated[card.id] = card;
        // setCards(updated);

        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor
                        FileInput={FileInput}
                        cards={cards}
                        addCard={createOrupdatedCard}
                        updatedCard={createOrupdatedCard}
                        deleteCard={deleteCard}
                    />
                    <Preview cards={cards} />
                </div>
            <Footer />
        </section>
    );
};

export default Maker;