import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({cards, addCard}) => {
    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Editor</p>
            {cards.map(card => (
                <CardEditForm card={card} key={card.id} />
            ))}
            <CardAddForm onAdd={addCard} />
        </section>
    );
};

export default Editor;