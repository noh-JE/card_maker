import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../maker/maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService, cardRepository}) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({
        //objedt 형태로 관리
        // '1': {
        //     id: '1',
        //     name: 'mong',
        //     company: 'samsung',
        //     theme: 'dark',
        //     email: 'ellie@ellie.com',
        //     message: 'go for it',
        //     fileName: null,
        //     fileURL: null
        // },
        // '2': {
        //     id: '2',
        //     name: 'mong',
        //     company: 'samsung',
        //     theme: 'light',
        //     email: 'ellie@ellie.com',
        //     message: 'go for it',
        //     fileName: null,
        //     fileURL: null
        // },
    });
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        if(!userId) {
            return
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        return () => stopSync();
    }, [userId]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else {
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
        cardRepository.saveCard(userId, card);
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