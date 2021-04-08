import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({cards, addCard, updatedCard, deleteCard}) => {
    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Editor</p>
            {Object.keys(cards).map(key => (
                <CardEditForm card={cards[key]} key={key} updatedCard={updatedCard} deleteCard={deleteCard} />
            ))}
            <CardAddForm onAdd={addCard} />
        </section>
    );
};

export default Editor;