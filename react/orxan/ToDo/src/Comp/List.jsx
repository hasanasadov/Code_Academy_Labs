import React from "react";
import ToDoEl from "./ToDoEl";

function List({ data, setData }) {
    
    return (
        <ul id="list">
            {data.map((el) => {
                return (
                    <ToDoEl
                        key={el.id}
                        checked={el.checked}
                        task={el.value}
                        setData={setData}
                        data={data}
                    />
                );
            })}
        </ul>
    );
}

export default List;
