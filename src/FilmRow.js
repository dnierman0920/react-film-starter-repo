import React, { Component } from 'react';
import './App.css';
import Fave from './Fave';
import Poster from './Poster';


class FilmRow extends Component {

    handleDetailsClick = (e, film) => {
        console.log('fetching details for: ', e.currentTarget.getElementsByTagName('h1')[0].innerText)
        console.log('fetching details for: ', film.title)
    }
  
    render() {

        return (
            <>
                <div className="film-row" onClick={(e)=>{this.handleDetailsClick(e,this.props.film)}}>
                        <Poster film={this.props.film}/>

                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date}</p>
                    </div>
                    <Fave />
                </div>
            </>
        );
    }
}

export default FilmRow;