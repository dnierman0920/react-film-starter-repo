import React, { Component } from 'react'

export default class Poster extends Component {
  render() {
    const urlPrefix = 'https://image.tmdb.org/t/p/w780/'
    console.log('FILM',this.props.film)
    const posterUrl = urlPrefix+this.props.film.poster_path

    return (
      <>
            <img src={posterUrl} alt={this.props.film.title} />
      </>
    )
  }
}
