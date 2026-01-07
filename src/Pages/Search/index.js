import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import Movie from '../../Components/Movie'
import './Search.css'

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=1865f43a0549ca50d341dd9ab8b29f49&query=${query}&language=pt-BR`

  const { data, loading, error } = useFetch(query ? searchUrl : null)
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200'

  if (loading) return <h2>Buscando por: {query}...</h2>
  if (error) return <h2>Erro na busca.</h2>

  return (
    <div className="search-container container">
      <h2 className="search-title">
        Resultados para: <span>{query}</span>
      </h2>

      <div className="movies-grid">
        {data?.results?.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            image={
              movie.poster_path
                ? `${baseImgUrl}${movie.poster_path}`
                : 'caminho-para-imagem-nula.jpg'
            }
            title={movie.title}
          />
        ))}
      </div>

      {data?.results?.length === 0 && (
        <p>Nenhum filme encontrado para sua busca.</p>
      )}
    </div>
  )
}

export default Search
