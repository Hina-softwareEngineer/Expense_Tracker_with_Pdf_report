import React from 'react';
import Logo from './Images/icon1.png';
import './App.css';

import NewTransaction from './components/NewTransaction/new.component';
import Balance from './components/Balance/balance.component';
import AmountBox from './components/amountBox/amount.component';
import List from './components/List/list.component';

import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./components/PdfDocument/pdfDocument";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faFilePdf);

class App extends React.Component {

  state = {
    thingsArray: [],
    expense: 0,
    income: 0,
  }


  addNewThing = ({ name, amount }) => {
    let { thingsArray } = this.state;

    this.setState({
      thingsArray: [...thingsArray, { name, amount, date: new Date() }],
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

  delete1 = (thingname, amount) => {

    let { thingsArray } = this.state;

    let newthingsArray = thingsArray.filter(({ name }) => (
      name !== thingname
    ));

    this.setState({
      thingsArray: newthingsArray,
    });

    if (amount >= 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          income: prevState.income - +amount
        }
      })
    }
    else {
      this.setState(prevState => {
        return {
          ...prevState,
          expense: prevState.expense - (+amount * -1)
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
            thingsArray.map(({ name, amount, date }, index) => (
              <List key={index} name={name} amount={amount} date={date} delete1={this.delete1} />
            ))
          }


          {thingsArray.length > 0 && <PDFDownloadLink
            document={<PdfDocument data={thingsArray} income={income} expense={expense} />}
            fileName="TransactionsReport.pdf"
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a"
            }}
          >
            {({ loading }) =>
              loading ? "Loading document..." : <p className="pdf">
                <FontAwesomeIcon icon='file-pdf' className="icon-pdf" color="red" /> Generate Report</p>
            }

          </PDFDownloadLink>}
          {
            thingsArray.length <= 0 ? <p>Try to add Transactions to generate report</p> : null
          }
        </div>
      </div>
    );
  }
}

export default App;
