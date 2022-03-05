import React from "react";
import styles from "./styles.module.css";

import "../../globals/globals.css";

export default function ContactUs () {
    return (
        <main className={`container ${styles.column}`}>
            <h1 className={styles.title}>Contact Us</h1>
            {/* <p className={`${styles.message} roboto`}>Type what you want to say for us.</p> */}

            <form className={styles.formContainer}>
                <div className={styles.containerInput}>
                    <label htmlFor="name" className={`${styles.label} roboto`}>Your Name: </label>
                    <input placeholder="Ex: Pedro Aug..." className={styles.input} name="name" id="name" type={"text"} />
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="subject" className={`${styles.label} roboto`}>Subject: </label>
                    <input placeholder="Ex: Change some brand..." className={styles.input} name="subject" id="subject" /> 
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="contentEmail" className={`${styles.label} roboto`}>Email Content: </label>
                    <textarea className={`${styles.input} ${styles.inputArea}`} placeholder="Ex: Please change brand for  me..." name="contentEmail" id="contentEmail" />
                </div>
                <div className={styles.containerButtons}>
                    <button className={`roboto ${styles.button} default-shadow`} type="reset">
                        <i className="fa fa-eraser"></i>
                        <p>Clean Form</p>
                    </button>
                    <button className={`roboto ${styles.button} default-shadow`} type="button">
                        <i className="fa fa-eraser"></i>
                        <p>Clean Email Content</p>
                    </button>
                    <button className={`roboto ${styles.button} default-shadow`} type="submit">
                        <i className="bi bi-send"></i>
                        <p>Send</p>
                    </button>
                </div>
            </form>
        </main>
    );

}
