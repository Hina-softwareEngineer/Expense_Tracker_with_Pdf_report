import React from 'react';
import './balance.style.css';

const Balance = ({ balance }) => (
    <div className="balance">
        <h1>Balance</h1>
        <h4 className={`${balance >= 0 ? 'great' : 'danger'}`}>${balance}</h4>
    </div>
);

export default Balance;