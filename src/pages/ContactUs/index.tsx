import React, { useState } from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";
import { sendForm } from "@emailjs/browser";

import "../../globals/globals.css";

export default function ContactUs () {
    const [name, setName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate();

    function backPage(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        ev.preventDefault();

        navigate(-1);

    }

    function handleResetForm () {
        setContent("");
        setName("");
        setSubject("");
        setEmail("");

    }

    function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        sendForm('service_v8knv1r', 'template_l8s2i3q', ev.currentTarget, '5h498PxDxyLk5NH13')
            .then((result) => {
                alert("Email enviado com sucesso!");
                console.log(result);

            }, (error) => {
                alert(error.message);

            });

        ev.currentTarget.reset();
        handleResetForm();

    }

    return (
        <main className={`container ${styles.column}`}>
            <h1 className={styles.title}>Contact Us</h1>
            {/* <p className={`${styles.message} roboto`}>Type what you want to say for us.</p> */}

            <form onSubmit={(ev) => handleSubmit(ev)} className={styles.formContainer}>
                <div className={styles.containerInput}>
                    <label htmlFor="name" className={`${styles.label} roboto`}>Your Name*: </label>
                    <input value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Ex: Pedro Aug..." required className={styles.input} name="name" id="name" type={"text"} />
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="email" className={`${styles.label} roboto`}>Your E-mail*: </label>
                    <input value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder="Ex: person@gmai..." required type={"email"} className={styles.input} name="email" id="email" /> 
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="subject" className={`${styles.label} roboto`}>Subject*: </label>
                    <input value={subject} onChange={(ev) => setSubject(ev.target.value)} placeholder="Ex: Change some brand..." required className={styles.input} name="subject" id="subject" /> 
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="content" className={`${styles.label} roboto`}>Email Content*: </label>
                    <textarea value={content} onChange={(ev) => setContent(ev.target.value)} className={`${styles.input} ${styles.inputArea}`} required placeholder="Ex: Please change brand for  me..." name="content" id="content" />
                </div>
                <div className={styles.containerAux}>
                    <button onClick={(ev) => backPage(ev)} className={`${styles.btnCancel} ${styles.button}`}>Cancel</button>
                    <div className={styles.containerButtons}>
                        <button className={`roboto ${styles.button} default-shadow`} onClick={() => handleResetForm()} type="reset">
                            <i className="fa fa-eraser"></i>
                            <p>Clean Form</p>
                        </button>
                        <button onClick={() => setContent("")} className={`roboto ${styles.button} default-shadow`} type="button">
                            <i className="fa fa-eraser"></i>
                            <p>Clean Email Content</p>
                        </button>
                        <button className={`roboto ${styles.button} default-shadow`} type="submit">
                            <i className="bi bi-send"></i>
                            <p>Send</p>
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );

}
