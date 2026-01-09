import { Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'
import Search from './Pages/Search'
import Favorites from './Pages/Favorites'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:movieId" element={<MovieDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Routes>
  )
}

export default AppRoutes
