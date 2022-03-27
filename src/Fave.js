import React, { Component } from 'react'


export default class Fave extends Component{
    constructor(props){
        super(props)

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isFave: false
        }
    }

    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        // console.log("handling Fave click!")
        // console.log("Event: ", e)
        this.setState({
            isFave:!this.state.isFave
        })
    }


    render() {
        
        const action = this.state.isFave ? 'remove_from_queu' : 'add_to_queue'

        return(
            <div className={`film-row-fave ${action}`}>
                <p
                    className="material-icons"
                    onClick={(e) => {this.handleClick(e)}}
                >
                    {action}
                </p>
            </div>
        )
    }


}
