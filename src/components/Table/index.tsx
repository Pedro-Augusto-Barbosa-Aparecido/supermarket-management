import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import "../Paginator/styles.css";

import ReactPaginate from "react-paginate";

import { useTable, usePagination } from "react-table";
import api from "../../services/api";

export type PaginationClickButtonsProps = {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;

}

export type TableProps = {
  name: string;
  id: string;
  header: Array<string>;
  data: Array<Array<string>>;
  checkboxColumn: Boolean;
  actionsColumn: Boolean;
};

export default function Table(props: TableProps) {
    const [numberPages, setNumberPages] = useState(1);
    const [numberPerPages, setNumberPerPages] = useState(10);
    const [response, setResponse] = useState<Array<{name: string, active: boolean, id: string}>>([]);

    async function getData(data: object) {
        api.get("/brand", { data: {
            ...data
        }}).then((data) => {
            setResponse(data.data.results);
        });

    }

    useEffect(() => {
        setTimeout(() => {
            getData({ name: "", active: true }).then(() => {
                console.log("terminou")
            });
        }, 10);
    }, [])

    const data = useMemo(
        () =>
        response.map((d, _i) => {
            return {
            name: d.name,
            active: d.active ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>,
            };
        }),
        [response]
    );

    const columns = useMemo(
        () => [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Active",
            accessor: "active",
        },
        ],
        []
    );

    // @ts-ignore
    const { getTableProps, getTableBodyProps, headerGroups, page, pageCount, gotoPage, prepareRow } = useTable({ columns: columns, 
        data: data
    }, usePagination);

    useEffect(() => {
        setNumberPages(Math.ceil(props.data.length / numberPerPages));
    }, [numberPerPages, props.data, props.data.length]);

    const handlePaginationClick = ({ selected }: { selected: number }) => {
        gotoPage(selected);

    };

    return (
        <div className="table-container default-shadow">
        <div className="">
            <table
            {...getTableProps()}
            className="tables default-shadow"
            id={props.id}
            >
                <thead style={{ backgroundColor: "rgb(153 138 138)" }}>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {props.checkboxColumn ? (
                                <th className="">
                                    <div>
                                        <input className="form-check-input" type={"checkbox"} />
                                    </div>
                                </th>
                                ) : (
                                <></>
                            )}
                            {props.actionsColumn ? <th className="">Actions</th> : <></>}
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    
                    {
                    // @ts-ignore
                    page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
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
                        
                            {// @ts-ignore    
                            row.cells.map((cell) => {
                                return (
                                <td
                                    {...cell.getCellProps()}
                                >
                                    {cell.render("Cell")}
                                </td>
                                );
                            })}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
        {/* <select onChange={(ev) => setNumberPerPages(parseInt(ev.target.value))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
        </select> */}
        <ReactPaginate
            activeClassName="active"
            pageCount={pageCount}
            previousLabel="Previus"
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            containerClassName={"container-paginator"}
            onPageChange={handlePaginationClick}
        />
        </div>
    );
}
