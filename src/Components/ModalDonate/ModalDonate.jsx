import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from './ModalDonate.module.css';

function Modal({ message, onClose }) {
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h2>{message}</h2>
                <button className={styles.closeButton} onClick={onClose}>
                    Zamknij
                </button>
            </div>
        </div>
    );
}

function DonateModal() {
    const [showModal, setShowModal] = useState(false);
    const [searchParams] = useSearchParams();


    useEffect(() => {
        if (searchParams.get('donate') === 'success') {
            setShowModal(true);
        }
    }, [searchParams]);


    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <Modal
                    message="Dzięki za wsparcie!"
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}

export default DonateModal;