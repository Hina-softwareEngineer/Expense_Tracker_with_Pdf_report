import React from 'react';
import Alert from '../Alert/alert.component';
import './new.styles.css';

class NewTransaction extends React.Component {

    state = {
        alertShown: false,
        toggle: true
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();

        if ((this.state.thing === undefined || this.state.amount === undefined)
            || (this.state.thing === "" || this.state.amount === "")) {
            this.setState({ alertShown: true });

        }
        else {

            this.setState({
                alertShown: false,
                toggle: true,
                thing: "",
                amount: ""
            });

            let object = {
                name: this.state.thing,
                amount: this.state.amount,
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
                <h1>Add New Transaction <span onClick={() => {
                    this.setState({ toggle: !toggle })
                }}>+</span></h1>

                {
                    toggle ? null : <form onSubmit={this.handleSubmit}>
                        <label>Thing </label>
                        <input onChange={this.handleInput}
                            type="text"
                            name="thing"
                            value={this.state.thing}
                            placeholder="Enter thing..."
                        />

                        <label>Amount (Negative = expense, positive = income) </label>

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