import React from "react";
import "./style.css";

const Card = ({ title, description, isAvtive }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{isActive}</span>
        </div>
    );
};

export default Card;
