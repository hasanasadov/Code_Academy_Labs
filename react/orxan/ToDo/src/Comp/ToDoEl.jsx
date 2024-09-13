import React from "react";
import xImg from "../assets/x.svg";

function ToDoEl({ id, checked, task, setData, data }) {
    console.log(checked);

    const handleToggle = (id) => {
        const completed = data.map((el) => {
            if (el.id === id) {
                return { ...el, checked: !checked  };
            }
            return el;
        });
        console.log("tapildi", completed);
        setData(completed);
    };
    
    return (
        <li className="liItem">
            <div className="li-left">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleToggle(id)}
                />
                <span className="notchecked">{task}</span>
            </div>
            <button className="deleteBtn">
                <img className="deleteSvg" src={xImg} alt="" />
            </button>
        </li>
    );
}

export default ToDoEl;
