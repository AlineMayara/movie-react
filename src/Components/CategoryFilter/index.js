import React from 'react'

import './CategoryFilter.css'

import { genres } from '../../Data/genres'

const CategoryFilter = ({ onGenreSelect, selectedGenre }) => {
  return (
    <div className="category-filter-container">
      {genres.map(genre => (
        <button
          key={genre.id}
          className={`category-button ${
            selectedGenre === genre.id ? 'active' : ''
          }`}
          onClick={() => onGenreSelect(genre)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
