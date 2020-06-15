import React from 'react';
import './App.css';
import NewTransaction from './components/NewTransaction/new.component';
import Balance from './components/Balance/balance.component';
import AmountBox from './components/amountBox/amount.component';
import List from './components/List/list.component';


class App extends React.Component {

  state = {
    thingsArray: [],
    expense: 240,
    income: 500,
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

        <h1>Expense Tracker</h1>

        <div className="container">
          <Balance balance={income - expense} />

          <div className="box">
            <AmountBox text="Expense" amount={expense} />
            <AmountBox text="Income" amount={income} />
          </div>
          <NewTransaction addNewThing={this.addNewThing} />

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
