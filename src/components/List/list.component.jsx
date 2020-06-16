import React from 'react';
import './list.style.css';

const List = ({ name, amount }) => {

    let date = new Date();

    return (
        <div className={`list ${
            amount > 0 ? "red" : "green"
            }`}>
            <p>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
            <p>{name}</p>
            <p>{amount}$</p>
        </div>
    )
};


export default List;