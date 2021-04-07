import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({cards}) => {
    return(
        <section className={styles.preview}>
            <p className={styles.title}>Card Preview</p>
            <ul className={styles.cards}>
                {cards.map(card => (
                    <Card card={card} />
                ))}
            </ul>
        </section>
    );
};

export default Preview;