import Movie from '../Movie'
import './ApiMovie.css'
import { useFetch } from '../../Hooks/useFetch'

const MovieSection = ({ title, apiUrl }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200'

  const { data, loading, error } = useFetch(apiUrl)

  if (error) {
    return <h2>Ocorreu um erro: {error.message || error}</h2>
  }

  if (loading) {
    return <h2>Carregando filmes...</h2>
  }

  if (!data || data.results.length === 0) {
    return null
  }

  return (
    <>
      <div className="trending-movies">
        <h2>{title}</h2>
        <button className="chevron-btn">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <section>
        <div className="flex-center secao-container">
          <button className="backward-btn">
            <span className="material-symbols-outlined">chevron_backward</span>
          </button>

          <div className="flex-center movies">
            {data.results.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                image={`${baseImgUrl}${movie.poster_path}`}
                title={movie.title}
              />
            ))}
          </div>

          <button className="forward-btn">
            <span className="material-symbols-outlined">chevron_forward</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default MovieSection

//Explicando o código acima:

/* Em resumo: o objetivo desse código é garantir que a seção de filmes (MovieSection) só seja exibida,
 se houver de fato uma lista de filmes (movies) com pelo menos um item. Se a lista não existir ou estiver vazia, 
 o componente "desiste" de ser renderizado, evitando erros e mantendo a interface limpa, sem seções vazias.
  Foi feito uma destruturação de props para extrair o título e a lista de filmes (movies) da propriedade "title" e "movies".
  A condição if (!movies || movies.length === 0) verifica se a lista de filmes (movies) existe e se ela tem pelo menos um item.
   Se a condição for verdadeira, o componente "MovieSection" não será renderizado, evitando erros e mantendo a interface limpa, sem seções vazias.
    Se a condição for falsa, o componente "MovieSection" será renderizado, exibindo a seção de filmes com o título e os filmes.
     */
