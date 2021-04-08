import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({FileInput, cards, addCard, updatedCard, deleteCard}) => {
    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Editor</p>
            {Object.keys(cards).map(key => (
                <CardEditForm
                    key={key}
                    FileInput={FileInput}
                    card={cards[key]}
                    updatedCard={updatedCard}
                    deleteCard={deleteCard}
                />
            ))}
            <CardAddForm FileInput={FileInput} onAdd={addCard} />
        </section>
    );
};

export default Editor;