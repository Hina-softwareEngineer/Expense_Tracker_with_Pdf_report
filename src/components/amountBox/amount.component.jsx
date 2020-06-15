import React from 'react';
import './amount.style.css';

const Amount = ({ text, amount }) => (
    <div className="amountBox">
        <h1>{text}</h1>
        <h4>${amount}</h4>
    </div>
);

export default Amount;