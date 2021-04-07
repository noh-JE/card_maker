import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({cards}) => {
    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Editor</p>
            {cards.map(card => (
                <CardEditForm card={card} />
            ))}
        </section>
    );
};

export default Editor;