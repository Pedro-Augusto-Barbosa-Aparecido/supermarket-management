import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Menu () {
    return (
        <aside className="menu">
            <Link to={"/"} className="link">
                <i className="bi bi-house-door-fill"></i>
                <p>Sells</p>
            </Link>
            <Link to={"/product"} className="link">
                <i className="fa fa-product-hunt"></i>
                <p>Products</p>
            </Link>
            <Link to={"/expense"} className="link">
                <i className="fa fa-bar-chart"></i>
                <p>Expenses</p>
            </Link>
            <Link to={"/contact-us"} className="link help">
                <i className="bi bi-question-circle-fill"></i>
                <p>Contact Us</p>
            </Link>
        </aside>

    );

}
