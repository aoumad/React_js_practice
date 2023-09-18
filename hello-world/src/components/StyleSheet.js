import React from "react";
import { Component } from "react";
import './MyStyle.css';

function StyleSheet(props)
{
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={className}>StyleSheets</h1>
        </div>
    )
}

export default StyleSheet