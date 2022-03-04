import React, { useEffect, useState, useCallback } from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";
import "../../../components/Paginator/styles.css";

import $ from "jquery";
import axios from "axios";

export default function BrandList() {
    const [data, setData] = useState<Array<Array<any>>>([]);
    const [allData, setAllData] = useState<Array<Array<any>>>([]);
    const [numberPages, setNumberPages] = useState<number>(1);
    const [numberPerPages, setNumberPerPages] = useState<number>(10);
    const [name, setName] = useState<string>("");
    const [active, setActive] = useState<boolean>(true);
    const [total, setTotal] = useState(0);
    const [messageNoData, setMessageNoData] = useState<string>("No Data.");

    const goToFirstPage = () => {
        const first = $("a[aria-label='Page 1']");

        if (first.length)
            first[0].click();

    };

    const fetchDataList = useCallback(async (name: string, active: boolean) => {
        const req = await axios.post("http://localhost:3333/brand/getList", {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": name,
                "active": active
            }
        });
        const response = req;
        const aux: Array<any> = [];
        
        setMessageNoData(response.data.msg);
        setTotal(response.data.total);

        response.data.results.forEach((d: any, i: number) => {
            aux.push([d.name, d.active ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>]);

        });

        return aux;

    }, []);

    const fetchData = useCallback(() => {
        fetchDataList(name, active).then((data) => {
            setAllData([...data]);
            setData([...data].slice(0, numberPerPages));
            setNumberPages(Math.ceil(data.length / numberPerPages));

        });

    }, [active, fetchDataList, name, numberPerPages]);

    const handleSubmitFilterForm = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();
        fetchData();

    }

    const handleChangePages = (ev: { 
        index: number | null; 
        selected: number; 
        nextSelectedPage: number | undefined; 
        event: object; 
        isPrevious: boolean; 
        isNext: boolean; 
        isBreak: boolean;
        isActive: boolean;
    }, data: any[], numPages: number, numPerPages: number) => {
        if (((ev.selected + 1) >= numPages) && ev.isNext) 
            return;

        if ((ev.selected === 0) && ev.isPrevious) 
            return;

        if (ev.isNext) 
            setData(data.slice(((ev.selected + 1) * numPerPages), ((ev.selected + 2) * numPerPages)));

        if (ev.isPrevious) 
            setData(data.slice(((ev.selected - 1)* numPerPages), (ev.selected * numPerPages))); 

        if (!ev.isNext && !ev.isPrevious)
            setData(data.slice(((ev.nextSelectedPage || 0) * numPerPages), (((ev.nextSelectedPage || 0) + 1) * numPerPages)));

    } 

    useEffect(() => {
        fetchData();

    }, [fetchData]);

    return (
        <main className="container column-display">
            <h1>Brand List</h1>
            <div className="filter-container default-shadow">
                <div className="form-filter">
                    <div className="input-container">
                        <label htmlFor="name">Name: </label>
                        <input onChange={(ev) => setName(ev.target.value)} name="name" id="name" type="text" placeholder="Type name of BRAND..." />
                    </div>
                    <div className="input-container">
                        <label htmlFor={"acitve"}>Active</label>
                        <select name={"active"} id="active" onChange={(ev) => {
                            if (ev.target.value === "1")
                                setActive(true);
                            else if (ev.target.value === "0")
                                setActive(false);
                            else
                                alert("Valor padrão setado como true, valor inválido inserido");

                        }}>
                            <option value="1" selected>Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="form-buttons">
                    <button className="button" type="submit" id="search" name="search" onClick={(ev) => handleSubmitFilterForm(ev)}>
                        <i className="bi bi-search"></i>
                        <p>Search</p>
                    </button>
                </div>
            </div>
            <div className="table-container default-shadow">
                <table className="tables default-shadow">
                    <thead style={{ backgroundColor: "rgb(153 138 138)" }}>
                        <tr>
                            <th className="">
                                <div>
                                    <input className="form-check-input" type={"checkbox"} />
                                </div>
                            </th>
                            <th>
                                Actions
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Active
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? data.map((brand, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div>
                                                <input className="form-check-input" type={"checkbox"} />
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                            <i
                                                title="Detail"
                                                className="bi bi-search button-action detail"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                title="Edit"
                                                className="bi bi-pencil-square button-action edit"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                title="Delete"
                                                className="bi bi-trash-fill button-action delete"
                                                aria-hidden="true"
                                            ></i>
                                            </div>
                                        </td>
                                        {
                                            brand.map((_b, i) => {
                                                return (
                                                    <td key={i}>
                                                        { _b }
                                                    </td>   
                                                );
                                            })
                                        }
                                    </tr>
                                );

                            }) :

                            <></>
                            
                        }
                    </tbody>
                </table>    
                <div className="container-pagination-footer">
                    <div className="select-per-page">
                        <label htmlFor="num-per-page">Per Page: </label>
                        <select name="num-per-page" id="num-per-page" onChange={(ev) => {
                            setNumberPerPages(parseInt(ev.target.value));
                            goToFirstPage();

                        }}>
                            <option value={5}>5</option>
                            <option value={10} defaultValue={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <ReactPaginate
                        activeClassName="active"
                        pageCount={numberPages}
                        previousLabel="Previus"
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        containerClassName={"container-paginator"}
                        onClick={(ev) => handleChangePages(ev, allData, numberPages, numberPerPages)}
                    />
                    <span className="total-data">Total: { total }</span>
                </div>
            </div>
        </main>

    );

}
