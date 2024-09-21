import { useState } from "react";
import styles from './TipForm.module.css';
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBeer} from "@fortawesome/free-solid-svg-icons/faBeer";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";

function TipForm() {
    const handleTipSubmit = async (e) => {
        e.preventDefault();
        const tipData = {
            description: "Napiwek",
            total_amount	: 3000,
        };


            const response = await fetch(`${ApiUrls.mainUrl}create-order/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tipData),
            }) .then(response => response.json())
                .then(data => {
                    if (data.redirectUri) {
                        window.location.href = data.redirectUri;
                    }
                });

            if (!response.ok) {
                throw new Error('Nie udało się wysłać napiwku.');
            }

    };

    return (
        <div className={styles.tipFormContainer}>
            <div className={styles.tipForm} >
                <h2 className={styles.title}>Wspomóż mnie napiwkiem!</h2>
                <div className={styles.buttonContainer}>
{/*                    <button type="submit" className={styles.button} onClick={handleTipSubmit}>
                        Wyślij napiwek
                    </button>*/}
                    <FontAwesomeIcon className={styles.button} icon={faBeer} onClick={handleTipSubmit} />
                </div>

            </div>
        </div>
);
}

export default TipForm;
