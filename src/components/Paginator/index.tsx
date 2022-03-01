import React, { useEffect, useState } from "react";
import "./styles.css";

import $ from "jquery";

export type PaginatorProps = {
    total?: Number,
    currentPageState?: Number

}

export default function Paginator(props: PaginatorProps) {
    const [numberPages, setNumberPages] = useState<Array<Number>>([1]);

    useEffect(() => {
        setNumberPages([1, 2, 3, 4, 5])
    }, [numberPages]);

    function resetActiveButton () {
        document.querySelectorAll(".number-btn").forEach((btn, index) => {
            if (btn.classList.contains("active"))
                btn.classList.remove("active");

        });

    }

    function setActiveButton (index: number) {
        document.querySelectorAll(".number-btn").item(index).classList.add("active");

    }

    const changeActivePage = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: Number) => {
        resetActiveButton();
        ev.currentTarget.classList.add("active");

    };

    const changeByButtonNextAndPrev = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (ev.currentTarget.disabled) 
            return;

        if (ev.currentTarget.id === "first") {
            setActiveButton(0);

            $("#first").attr("disabled", "true");
            $("#prev").attr("disabled", "true");

            resetActiveButton();

        }

        else if (ev.currentTarget.id === "prev") {
            const btns = $(".number-btn");

            for (var i = 0; i < btns.length; i++) 
                if ($(btns[i]).hasClass("active")) {
                    setActiveButton(parseInt($(btns[i]).attr("value") || "0"));
                    console.log("entrei")
                    break;

                }

            resetActiveButton();
                
            $("#first").attr("disabled", "true");
            $("#prev").attr("disabled", "true");

        }   

    };

    return (
        <div className="container-paginator">
            <button onClick={(ev) => changeByButtonNextAndPrev(ev)} id="first" name="first">
                <i className="bi bi-chevron-double-left" aria-hidden="true"></i>
            </button>
            <button onClick={(ev) => changeByButtonNextAndPrev(ev)} id="prev" name="prev">
                <i className="bi bi-chevron-left" aria-hidden="true"></i>
            </button>
            {
                numberPages.map((number, index) => {
                    return (
                        <button value={index} onClick={(ev) => changeActivePage(ev, index)} className={`${index === 1 ? "active" : ""} number-btn`} key={index}>
                            { number }
                        </button>
                    );
                })
            }
            <button onClick={(ev) => changeByButtonNextAndPrev(ev)} id="next" name="next">
                <i className="bi bi-chevron-right" aria-hidden="true"></i>
            </button>
            <button onClick={(ev) => changeByButtonNextAndPrev(ev)} id="last" name="last">
                <i className="bi bi-chevron-double-right" aria-hidden="true"></i>
            </button>
        </div>

    ); 

}
