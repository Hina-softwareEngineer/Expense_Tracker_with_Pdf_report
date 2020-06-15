import React from 'react';
import Alert from '../Alert/alert.component';
import './new.styles.css';

class NewTransaction extends React.Component {

    state = {
        alertShown: false
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

            this.setState({ alertShown: false });


            let object = {
                name: this.state.thing,
                amount: this.state.amount,
            }

            this.props.addNewThing(object);

        }
    }

    render() {
        let { alertShown } = this.state;

        return (
            <div className="transaction">
                {
                    alertShown ? <Alert /> : null
                }
                <h1>Add new Transaction</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Thing </label>
                    <input onChange={this.handleInput}
                        type="text"
                        name="thing"

                        placeholder="Enter thing..."
                    />

                    <label>Amount</label>

                    <input onChange={this.handleInput}
                        type="number"
                        name="amount"

                        placeholder="Enter amount..."
                    />

                    <button>Add New Transaction</button>

                </form>
            </div>
        );
    }
}

export default NewTransaction;