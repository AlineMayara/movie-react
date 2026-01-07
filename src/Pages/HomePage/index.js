import { useState } from 'react'
import ApiMovie from '../../Components/ApiMovie'
import CategoryFilter from '../../Components/CategoryFilter'
import './HomePage.css'

const HomePage = () => {
  const apiKey = '1865f43a0549ca50d341dd9ab8b29f49'

  const [selectedGenre, setSelectedGenre] = useState({
    id: 'now_playing',
    name: 'Lançamentos'
  })

  const handleGenreSelect = genre => {
    setSelectedGenre(genre)
  }

  let apiUrl = ''
  if (selectedGenre.id === 'now_playing' || selectedGenre.id === 'popular') {
    apiUrl = `https://api.themoviedb.org/3/movie/${selectedGenre.id}?api_key=${apiKey}&language=pt-BR`
  } else {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${selectedGenre.id}`
  }

  return (
    <main className="container">
      <div className="banner__top"></div>

      <CategoryFilter
        onGenreSelect={handleGenreSelect}
        selectedGenre={selectedGenre.id}
      />

      <ApiMovie
        key={selectedGenre.id}
        title={selectedGenre.name}
        apiUrl={apiUrl}
      />
    </main>
  )
}

export default HomePage
