import React from 'react';
import Alert from '../Alert/alert.component';
import './new.styles.css';

class NewTransaction extends React.Component {

    state = {
        alertShown: false,
        toggle: true,
        transaction: "Income",
    }

    handleInput = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value });

    }


    handleSubmit = (e) => {
        e.preventDefault();

        if ((this.state.thing === undefined || this.state.amount === undefined)
            || (this.state.thing === "" || this.state.amount === "")) {
            this.setState({ alertShown: true });

        }
        else {

            let amount = this.state.amount;
            this.setState({
                alertShown: false,
                toggle: true,
                thing: "",
                amount: "",
                transaction: "Income"
            });

            if (this.state.transaction === "Expense") {
                amount = amount * -1;
            }

            let object = {
                name: this.state.thing,
                amount: amount,
            }

            this.props.addNewThing(object);

        }
    }

    render() {
        let { alertShown, toggle } = this.state;


        return (
            <div className="transaction">
                {
                    alertShown ? <Alert /> : null
                }
                <h1 onClick={() => {
                    this.setState({ toggle: !toggle })
                }}>Add New Transaction </h1>

                {
                    toggle ? null : <form onSubmit={this.handleSubmit}>


                        <div className="radioButton">
                            <label>
                                <input onChange={this.handleInput}
                                    type="radio"
                                    name="transaction"
                                    value="Income"
                                    checked={this.state.transaction === "Income"}
                                /> Income
                        </label>

                            <label>
                                <input onChange={this.handleInput}
                                    type="radio"
                                    name="transaction"
                                    checked={this.state.transaction === "Expense"}
                                    value="Expense"
                                /> Expense</label>
                        </div>

                        <label>Thing </label>
                        <input onChange={this.handleInput}
                            type="text"
                            name="thing"
                            value={this.state.thing}
                            placeholder="Enter thing..."
                        />

                        <label>Amount</label>

                        <input onChange={this.handleInput}
                            type="number"
                            name="amount"
                            value={this.state.amount}
                            placeholder="Enter amount..."
                        />

                        <button>Add New Transaction</button>

                    </form>
                }


            </div>
        );
    }
}

export default NewTransaction;