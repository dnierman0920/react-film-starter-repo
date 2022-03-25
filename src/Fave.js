import React, { Component } from 'react'


export default class Fave extends Component{
    constructor(props){
        super(props)

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log("handling Fave click!")
        console.log("Event: ", e)
    }


    render() {
        return(
            <div className="film-row-fave add_to_queue">
                <p
                    className="material-icons"
                    onClick={(e) => {this.handleClick(e)}}
                >
                    add_to_queue 
                </p>
            </div>
        )
    }


}
