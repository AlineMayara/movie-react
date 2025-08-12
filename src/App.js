import './index.css'
import MovieSection from './Components/MovieSection'

function App() {
  const apiKey = '1865f43a0549ca50d341dd9ab8b29f49'

  const urls = {
    lancamentos: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&region=BR`,
    emAlta: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&region=BR`,
    familia: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=10751`,
    acao: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=28`,
    comedia: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=35`
  }

  return (
    <>
      <header className="headercontainer">
        <nav className="navbar container">
          <h1>Filmes Online</h1>
          <ul>
            <li>Filmes</li>
            <li>Lançamentos</li>
            <li>Listas</li>
          </ul>

          <form className="search-form">
            <button classNname="search-btn" type="button">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="close-btn">
              <span className="material-symbols-outlined">close</span>
            </button>

            <input
              className="search-input"
              type="text"
              placeholder="Que filme você quer assistir?"
              name=""
              quired=""
              value=""
            />
          </form>
        </nav>
      </header>

      <main className="container">
        <div className="banner__top"></div>
        <div className="content__principal">
          <a href="/br/acao">Ação</a>
          <a href="/br/terror">Terror</a>
          <a href="/br/ficcao-cientifica-e-fantasia">
            Ficção científica e fantasia
          </a>
          <a href="/br/comedia">Comédia</a>
          <a href="/br/romance">Romance</a>
          <a href="/br/aventura">Aventura</a>
          <a href="/br/suspense">Suspense</a>
          <a href="/br/familia">Familia</a>
          <a href="/br/drama">Drama</a>
          <a href="/br/documentário">Documentário</a>
          <a href="/br/faroeste">Faroeste</a>
          <a href="/br/mistério">Mistério</a>
          <a href="/br/musical">Musical</a>
          <a href="/br/show">Show</a>
        </div>

        <div className="online-movies">
          <h1>Assistir filmes online</h1>
          <button className="arrow-btn" type="button">
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
        </div>

        <MovieSection
          id="lancamentos"
          title="Lançamentos"
          apiUrl={urls.lancamentos}
        />

        <MovieSection
          id="em-alta"
          title="Filmes em Alta"
          apiUrl={urls.emAlta}
        />

        <MovieSection
          id="familia"
          title="Filmes para Família"
          apiUrl={urls.familia}
        />
        <MovieSection id="acao" title="Ação" apiUrl={urls.acao} />
        <MovieSection id="comedia" title="Comédia" apiUrl={urls.comedia} />
      </main>
    </>
  )
}

export default App

/*
 const lancamentos = [
    { id: 'l1', title: 'Duna: Parte 2', image: 'img/duna-2.webp' },
    { id: 'l2', title: 'Godzilla e Kong', image: 'img/godzilla-kong.webp' },
    { id: 'l3', title: 'Kung Fu Panda 4', image: 'img/kungfu-panda-4.webp' }
  ]

  const filmesEmAlta = [
    { id: 'a1', title: 'As Branquelas', image: 'img/as-branquelas.jpeg' },
    { id: 'a2', title: 'Oppenheimer', image: 'img/oppenheimer.webp' },
    { id: 'a3', title: 'Barbie', image: 'img/barbie.webp' }
  ]

  const filmesFamilia = [
    { id: 'f1', title: 'A Era do Gelo', image: 'img/eradogelo.webp' },
    { id: 'f2', title: 'Os Corajosos', image: 'img/os-corajosos.webp' },
    { id: 'f3', title: 'Shrek', image: 'img/shrek.webp' }
  ]*/
