import React from 'react';
import Logo from './Images/icon1.png';
import './App.css';

import NewTransaction from './components/NewTransaction/new.component';
import Balance from './components/Balance/balance.component';
import AmountBox from './components/amountBox/amount.component';
import List from './components/List/list.component';



class App extends React.Component {

  state = {
    thingsArray: [],
    expense: 0,
    income: 0,
  }

  addNewThing = ({ name, amount }) => {
    let { thingsArray } = this.state;

    this.setState({
      thingsArray: [...thingsArray, { name, amount }],
    });

    if (amount >= 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          income: prevState.income + +amount
        }
      })
    }
    else {
      this.setState(prevState => {
        return {
          ...prevState,
          expense: prevState.expense + (+amount * -1)
        }
      })
    }

  }


  render() {
    let { expense, income, thingsArray } = this.state;

    return (

      <div className="App">

        <h1><img src={Logo} alt="Expense-Tracker" /> Expense Tracker</h1>

        <div className="container">
          <Balance balance={income - expense} />

          <div className="box">
            <AmountBox text="Income" amount={income} />
            <AmountBox text="Expense" amount={expense} />

          </div>
          <NewTransaction addNewThing={this.addNewThing} />

          <h1 className="transaction-heading">Transactions</h1>
          {
            thingsArray.map(({ name, amount }, index) => (
              <List key={index} name={name} amount={amount} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
