import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/movie/:movieId" element={<MovieDetails />} />
    </Routes>
  )
}

export default AppRoutes
