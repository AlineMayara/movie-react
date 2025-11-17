import './movie.css'
import { Link } from 'react-router-dom'

const Movie = ({ image, title, id }) => {
  return (
    <Link to={`/movie/${id}`} className="movie">
      <img src={image} alt={title} />
      <span>{title}</span>
    </Link>
  )
}

export default Movie
