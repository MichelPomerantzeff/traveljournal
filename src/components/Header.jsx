import React from "react";

function Header(props) {
    return (
        <div className="header">
            <div className="globe">
            {props.icon ? props.icon : ""}
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header