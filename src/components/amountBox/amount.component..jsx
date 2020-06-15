import React from 'react';


const Balance = ({ text, amount }) => (
    <div>
        <h1>{text}</h1>
        <h4>${amount}</h4>
    </div>
);

export default Balance;