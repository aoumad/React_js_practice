import React from "react";
import { Component } from "react";

class Form extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            username: ''
        }
    }

    handleUserNameChange = (event) =>
    {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleSubmit = (event) =>
    {
        alert(`${this.state.username}`);
        event.preventDefault();
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange  }/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;