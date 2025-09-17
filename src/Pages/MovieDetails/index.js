import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import './MovieDetails.module.css'

const MovieDetails = () => {
  const { movieId } = useParams()
  const apiKey = '1865f43a0549ca50d341dd9ab8b29f49'
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500'

  // 2. Use o hook para buscar os dados. Simples assim!
  // Renomeamos 'data' para 'movie' para ficar mais claro
  const { data: movie, loading, error } = useFetch(url)

  // 3. Verificações de estado
  if (loading) {
    return <h2 className="loading">Carregando detalhes...</h2>
  }

  if (error) {
    return <h2>Ocorreu um erro: {error}</h2>
  }

  if (!movie) {
    return <h2>Filme não encontrado.</h2>
  }

  // 4. A parte de exibição (JSX) continua a mesma
  return (
    <div className="movie-details-container">
      <img
        className="details-poster"
        src={`${baseImgUrl}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="details-info">
        <h1 className="details-title">{movie.title}</h1>
        <p className="details-overview">{movie.overview}</p>
        <p>
          <strong>Data de Lançamento:</strong>{' '}
          {new Date(movie.release_date).toLocaleDateString('pt-BR')}
        </p>
        <p>
          <strong>Nota:</strong> {movie.vote_average.toFixed(1)} / 10
        </p>
      </div>
    </div>
  )
}

export default MovieDetails
