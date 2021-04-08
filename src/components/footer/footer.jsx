import React, {memo} from 'react';
import styles from '../footer/footer.module.css';

const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <p className={styles.title}>Code your dream</p>
        </footer>
    );
});

export default Footer;