// @src/components/Modal.jsx

import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, data }) => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Report</h5>
                    </div>
                    <div className={styles.modalContent}>
                        Adult: {data.adult}
                    </div>
                    <div className={styles.modalContent}>
                        Violence: {data.violence}
                    </div>
                    <div className={styles.modalContent}>
                        Raciest : {data.racy}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
