import React from "react";

const Footer = ({data}) => {
    return (
        <div className="footer">
            <span id="count">{data.length} Items left</span>
            <div className="footer-center">
                <button id="showAll" className="selected">All</button>
                <button id="showActive">Active</button>
                <button id="showCompleted">Completed</button>
            </div>
            <div className="clear">
                <button id="clearCompleted">Clear completed</button>
            </div>
        </div>
    );
}

export default Footer;