import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './movie.css'

const Movie = ({ image, title, id }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('@meusFilmes')) || []
    const hasMovie = favorites.some(f => f.id === id)
    setIsFavorite(hasMovie)
  }, [id])

  const handleFavorite = e => {
    e.preventDefault()

    let favorites = JSON.parse(localStorage.getItem('@meusFilmes')) || []
    const hasMovie = favorites.some(f => f.id === id)

    if (hasMovie) {
      favorites = favorites.filter(f => f.id !== id)
    } else {
      favorites.push({ id, title, image })
    }

    localStorage.setItem('@meusFilmes', JSON.stringify(favorites))
    setIsFavorite(!hasMovie)
  }

  return (
    <div className="movie-card" style={{ position: 'relative' }}>
      <Link to={`/movie/${id}`} className="movie">
        <img src={image} alt={title} />
        <p>{title}</p>
      </Link>

      <button
        onClick={handleFavorite}
        className={`fav-button ${isFavorite ? 'active' : ''}`}
      >
        {isFavorite ? '❤️ Favorito' : '🤍 Favoritar'}
      </button>
    </div>
  )
}

export default Movie
