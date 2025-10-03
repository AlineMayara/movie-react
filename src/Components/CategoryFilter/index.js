import React from 'react'
import './CategoryFilter.module.css'

import { genres } from '../../Data/genres'

const CategoryFilter = ({ onGenreSelect, selectedGenre }) => {
  return (
    <div className="category-filter-container">
      {/* 2. O resto do código permanece o mesmo, mas agora é mais desacoplado */}
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
