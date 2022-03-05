import React from "react";
import styles from "./styles.module.css";

import "../../globals/globals.css";

import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="container collumn">
            <h1 className={styles.title}>Whoops, that page is gone.</h1>
            <p className={styles.message}>
                You navigate to not exist page, <Link to={"/"}>
                    go back-home.
                </Link>
            </p>
            <span
                className={styles.text404}
                unselectable="on"
                onSelect={() => false}
                onMouseDown={() => false}
            >
                <p>404</p>
            </span>
            <p  className={styles.contactUs}>
                For more detail <Link to={"/contact-us"}>Contact us</Link>
            </p>
        </main>
    );  

}
