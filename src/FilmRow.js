import React, { Component } from 'react';
import './App.css';


class FilmRow extends Component {
  
    render() {
        const urlPrefix = 'https://image.tmdb.org/t/p/w780/'
        const posterUrl = urlPrefix+this.props.film.poster_path

        return (
            <>
                <div className="film-row">
                        <img src={posterUrl} alt="" />

                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default FilmRow;