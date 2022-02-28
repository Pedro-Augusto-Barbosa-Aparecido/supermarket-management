import React from "react";
import styles from "./styles.module.css";

export default function Header () {
    return (
        <header>
            <nav className={`navbar navbar-light bg-light ${styles.header}`}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Management System</span>
                </div>
            </nav>
        </header>
    );

}
