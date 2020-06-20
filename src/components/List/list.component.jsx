import React from 'react';
import './list.style.css';

const List = ({ name, amount, delete1, date, }) => {

    return (
        <div className={`list ${
            amount > 0 ? "green" : "red"
            }`}>
            <p>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
            <p>{name}</p>
            <p>{amount}$</p>
            <p className="red-cross" onClick={() => delete1(name, amount)}>X</p>
        </div>
    )
};


export default List;