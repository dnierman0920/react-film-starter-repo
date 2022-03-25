import React, { Component } from 'react';
import './App.css';
import Fave from './Fave';


class FilmRow extends Component {

    constructor(props){
        super(props)
    }

    handleDetailsClick = (e, film) => {
        console.log('fetching details for: ', e.currentTarget.getElementsByTagName('h1')[0].innerText)
        console.log('fetching details for: ', film.title)
    }
  
    render() {
        const urlPrefix = 'https://image.tmdb.org/t/p/w780/'
        const posterUrl = urlPrefix+this.props.film.poster_path

        return (
            <>
                <div className="film-row" onClick={(e)=>{this.handleDetailsClick(e,this.props.film)}}>
                        <img src={posterUrl} alt="" />

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