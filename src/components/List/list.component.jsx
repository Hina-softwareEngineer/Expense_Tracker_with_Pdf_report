import React from 'react';
import './list.style.css';

const List = ({ name, amount, delete1, date, }) => {

    return (
        <div className={`list ${
            amount > 0 ? "red" : "green"
            }`}>
            <p>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
            <p>{name}</p>
            <p>{amount}$</p>
            <p onClick={delete1}>X</p>
        </div>
    )
};


export default List;