import React from 'react';
import styles from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootStylesModal = [styles.myModal];

    if (visible) {
        rootStylesModal.push(styles.active)
    }

    return (
        <div onClick={() => setVisible(false)}
            className={rootStylesModal.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={styles.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;