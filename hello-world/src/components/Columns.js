import React from "react";
import { Component } from "react";

function Columns()
{
    // let id, title;
    const items = [id=44, title="Amazing"];
    return (
        <React.Fragment>
            {
                items.map(item =>
                    (
                        <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                        </React.Fragment>
                    ))
            }
            <td>Name</td>
            <td>Abderazzak</td>
        </React.Fragment>
    )
}

export default Columns;