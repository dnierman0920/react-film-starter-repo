import React, { Component } from 'react';
import './App.css';
import FilmRow from './FilmRow';

class FilmList extends Component {
  
    render() {
        const allFilms = this.props.films.map((film, index)=> {
            return <FilmRow key={index} film={film} />
            // return <div className="film-row"key={index}> <h1>{film.title}</h1> </div>
        })
        return (
            <>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <h1>{allFilms}</h1>
                </div>
            </>
        );
    }
}

export default FilmList;