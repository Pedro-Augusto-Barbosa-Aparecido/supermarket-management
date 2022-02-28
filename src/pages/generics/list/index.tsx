import React from "react";
// import Link from "react-router-dom";

import "./styles.css";

import Table from "../../../components/Table";

export type InputText = {
    name: string,
    id: string,
    label: string,
    type?: string,
    placeholder?: string

}

export type OptionsSelect = {
    value: string | number | readonly string[] | undefined,
    selected: boolean,
    labelOption: string 

}

export type InputSelect = {
    name: string,
    id: string,
    label: string,
    defaultValue?: string,
    options: Array<OptionsSelect>

}

export type ButtonsForm = {
    name: string,
    type?: string,
    id: string,
    iconClass?: string,
    label: string,
    fn?: Function

}

export type PageListProps = {
    title: string,
    textInput: Array<InputText>
    selectInput: Array<InputSelect>
    buttons?: Array<ButtonsForm>
    tableHeader: Array<string>

}

export default function PageList (props: PageListProps) {
    const handleSubmitFilterForm = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();

    }

    return (
        <main className="container column-display">
            <h1>{ props.title }</h1>
            <div className="filter-container default-shadow">
                <form>
                    <div className="form-filter">
                        {
                            props.textInput.map((input, index) => {
                                return (
                                    <div key={index} className="input-container">
                                        <label htmlFor={input.name}>{ input.label }</label>
                                        <input name={input.name} id={input.id} type={input.type || "text"} placeholder={input.placeholder || ""} />
                                    </div>
                                );

                            })
                        }
                        {
                            props.selectInput.map((select, index) => {
                                return (
                                    <div className="input-container" key={index}>
                                        <label htmlFor={select.name}>{select.label}</label>
                                        <select name={select.name} id={select.id}>
                                            {
                                                select.options.map((opt, _index) => {
                                                    return (
                                                        <option key={_index} value={opt.value} selected={opt.selected}>{ opt.labelOption }</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>

                                );

                            })
                        }
                    </div>
                    <hr />
                    <div className="form-buttons">
                        <button className="button" type="submit" id="search" name="search" onClick={(ev) => handleSubmitFilterForm(ev)}>
                            <i className="bi bi-search"></i>
                            <p>Search</p>
                        </button>
                    </div>
                </form>
            </div>
            <Table name="table" id="table" checkboxColumn actionsColumn header={props.tableHeader} data={[]} />
        </main>
    );

}
