import React from "react";
import { Component } from "react";

class UserGreeting extends Component
{

    constructor(props)
    {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }
    render()
    {
        if (this.state.isLoggedIn)
        {
            return (
                <div>
                Welcome again in a separated line to test conditional rendering!!
                </div>
            )
        }
        else
        {
            return (
                <div>
                Welcome Guest!!!
                </div>
            )
        }
    }
}

export default UserGreeting