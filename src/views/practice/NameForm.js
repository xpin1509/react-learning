import React, { Component } from 'react';
// 表单

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={(e) => { this.handleChange(e) }} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm