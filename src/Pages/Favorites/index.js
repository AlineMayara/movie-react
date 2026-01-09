import React, { useState, useEffect } from 'react'
import Movie from '../../Components/Movie'
import './Favorites.css'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('@meusFilmes')) || []
    setFavorites(savedFavorites)
  }, [])

  return (
    <div className="favorites-container container">
      <h2>Meus Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você ainda não salvou nenhum filme.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.image}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
