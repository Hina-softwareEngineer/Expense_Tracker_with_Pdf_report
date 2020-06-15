import React from 'react';
import './App.css';
import NewTransaction from './components/NewTransaction/new.component';
import Balance from './components/Balance/balance.component';
import AmountBox from './components/amountBox/amount.component.';

class App extends React.Component {

  state = {
    thingsArray: [],
    expense: 240,
    income: 500,
  }

  addNewThing = (object) => {
    let { thingsArray } = this.state;

    this.setState({
      thingsArray: [...thingsArray, object],
    });

    let keys = Object.keys(object);

    if (object[keys[0]] >= 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          income: prevState.income + +object[keys[0]]
        }
      })
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          expense: prevState.expense + (+object[keys[0]] * -1)
        }
      })
    }



  }


  render() {
    let { expense, income } = this.state;

    return (

      <div className="App">

        <h1>Expense Tracker</h1>

        <Balance balance={income - expense} />

        <AmountBox text="Expense" amount={expense} />
        <AmountBox text="Income" amount={income} />

        <NewTransaction addNewThing={this.addNewThing} />

      </div>
    );
  }
}

export default App;
