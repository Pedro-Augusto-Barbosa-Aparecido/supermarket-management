import React from "react";
import "./style.css";

export type TableProps = {
    name: string,
    id: string,
    header: Array<string>,
    data: Array<string>,
    checkboxColumn: Boolean,
    actionsColumn: Boolean

}

export default function Table (props: TableProps) {
    return (
        <div className="table-container default-shadow">
            <div className="">
                <table className="tables" id={props.id}>
                    <thead style={{backgroundColor: "rgb(153 138 138)"}}>
                        <tr>
                            {
                                props.checkboxColumn ? <th className="">
                                    <div>
                                        <input className="form-check-input" type={"checkbox"} />
                                    </div>
                                </th> : <></>
                            }
                            {
                                props.actionsColumn ? <th className="">
                                    Actions
                                </th> : <></>
                            }
                            {
                                props.header.map((header, index) => {
                                    return (
                                        <th key={index} className="">
                                            { header }
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );

}
