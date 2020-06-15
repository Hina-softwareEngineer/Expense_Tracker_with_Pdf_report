import React from 'react';

class NewTransaction extends React.Component {


    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => { });

    }

    handleSubmit = (e) => {
        e.preventDefault();

        let object = {
            [this.state.thing]: this.state.amount,
        }

        this.props.addNewThing(object);
    }

    render() {
        return (
            <div>
                <h1>Add new Transaction</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Thing :</label>
                    <input onChange={this.handleInput}
                        type="text"
                        name="thing"

                        placeholder="Enter thing..."
                    />

                    <label>Amount</label>
                    <p>(negative - expense, positive + income)</p>
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