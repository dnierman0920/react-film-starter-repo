import React, { Component } from 'react';
import './App.css';
import FilmRow from './FilmRow';

class FilmList extends Component {
    constructor(props){
        super(props)

        this.handleFilterClick = this.handleFilterClick.bind(this)

        this.state = {
            filter:'all'
        }
    }


    handleFilterClick = (filter) =>{
        console.log('a filter was clicked')
        console.log('FILTER: ', filter)
        this.setState({
            filter:filter
        })
     
    }
  
    render() {
        const allFilms = this.props.films.map((film, index)=> {
            return <FilmRow key={index} film={film} />
            // return <div className="film-row"key={index}> <h1>{film.title}</h1> </div>
        })
        return (
            <>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                        <div onClick={()=>this.handleFilterClick('all')} className="film-list-filter">
                            ALL
                            <span className="section-count">{this.props.films.length}</span>
                        </div>
                            <div onClick={()=>this.handleFilterClick('faves')} className="film-list-filter">
                                FAVES
                                <span className="section-count">0</span>
                            </div>
                    </div>
                    {allFilms}
                </div>
            </>
        );
    }
}

export default FilmList;