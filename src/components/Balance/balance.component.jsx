import React from 'react';
import './balance.style.css';

const Balance = ({ balance }) => (
    <div className="balance">
        <h1>Balance</h1>
        <h4>${balance}</h4>
    </div>
);

export default Balance;