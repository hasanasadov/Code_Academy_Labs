import React, { useState } from "react";
import down from "../assets/down.svg";

const Header = ({ setData }) => {
    const [value, setValue] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if(!e.target.value.trim()){return;}
            setValue(e.target.value.trim())
            setData((prev) => [
                ...prev,
                { id: Date.now(), value, checked: false },
            ]);
            setValue("");
        }
    };
    return (
        <div className="header">
            <button id="doneAll">
                <img className="doneAllSvg" src={down} alt="" />
            </button>
            <input
                onKeyDown={handleKeyDown}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                id="input"
                placeholder="What needs to be done?"
            />
        </div>
    );
};

export default Header;
