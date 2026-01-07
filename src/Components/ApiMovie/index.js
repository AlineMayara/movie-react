import { useEffect } from 'react'
import Movie from '../Movie'
import './ApiMovie.css'
import { useFetch } from '../../Hooks/useFetch'

// Importação do Glide e seus estilos
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

const MovieSection = ({ title, apiUrl }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200'
  const { data, loading, error } = useFetch(apiUrl)

  // Criamos um ID único para cada seção baseado no título
  const sectionId = title.replace(/\s+/g, '-').toLowerCase()

  useEffect(() => {
    // Só inicializa se os dados existirem e o carregamento terminou
    if (!loading && data?.results?.length > 0) {
      const glide = new Glide(`.glide-${sectionId}`, {
        type: 'carousel',
        startAt: 0,
        perView: 6, // Quantos filmes aparecem
        gap: 10,
        breakpoints: {
          1200: { perView: 5 },
          1024: { perView: 4 },
          768: { perView: 3 },
          480: { perView: 2 }
        }
      })

      glide.mount()

      return () => glide.destroy()
    }
  }, [loading, data, sectionId])

  if (error) return <h2>Ocorreu um erro: {error.message || error}</h2>
  if (loading) return <h2>Carregando filmes...</h2>
  if (!data || data.results.length === 0) return null

  return (
    <section className="movie-section-container">
      <div className="trending-movies">
        <h2>{title}</h2>
        <button className="chevron-btn">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Estrutura obrigatória do Glide */}
      <div className={`glide glide-${sectionId}`}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.results.map(movie => (
              <li key={movie.id} className="glide__slide">
                <Movie
                  id={movie.id}
                  image={`${baseImgUrl}${movie.poster_path}`}
                  title={movie.title}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Botões de Navegação conectados ao Glide */}
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left backward-btn"
            data-glide-dir="<"
          >
            <span className="material-symbols-outlined">chevron_backward</span>
          </button>
          <button
            className="glide__arrow glide__arrow--right forward-btn"
            data-glide-dir=">"
          >
            <span className="material-symbols-outlined">chevron_forward</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MovieSection
