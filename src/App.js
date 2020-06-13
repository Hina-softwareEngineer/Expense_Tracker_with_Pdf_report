import React from 'react';
import './App.css';
import NewTransaction from './components/NewTransaction/new.component';

class App extends React.Component {

  state = {
    thingsArray: [],
    expense: 0,
    income: 0,
  }

  addNewThing = (object) => {
    let { thingsArray } = this.state;

    console.log(object, thingsArray);
    this.setState({
      thingsArray: [...thingsArray, object]
    });

    console.log(this.state);
  }


  render() {
    return (
      <div className="App">

        <h1>Expense Tracker</h1>
        <NewTransaction addNewThing={this.addNewThing} />
      </div>
    );
  }
}

export default App;
