import './index.css'
import Movie from './Components/Movie'

function App() {
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

        <div className="trending-movies">
          <h2>Lançamentos DE 2024</h2>
          <button className="chevron-btn">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <section>
          <div id="secao" className="flex-center">
            <button className="backward-btn">
              <span className="material-symbols-outlined">
                chevron_backward
              </span>
            </button>

            <button className="forward-btn">
              <span className="material-symbols-outlined">chevron_forward</span>
            </button>

            <div id="movies1" className="flex-center movies">
              <Movie image="img/as-branquelas.jpeg" title="As Branquelas" />
              <Movie image="img/os-corajosos.webp" title="Os Corajosos" />
              <Movie image="img/eradogelo.webp" title="A Era do Gelo" />
            </div>
          </div>
        </section>

        <div class="trending-movies">
          <h2>Filmes em alta</h2>
          <button className="chevron-btn">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <section>
          <div id="secao" class="flex-center">
            <button className="backward-btn">
              <span className="material-symbols-outlined">
                chevron_backward
              </span>
            </button>

            <button className="forward-btn">
              <span className="material-symbols-outlined">chevron_forward</span>
            </button>

            <div id="movies2" class="flex-center movies">
              <Movie image="img/as-branquelas.jpeg" title="As Branquelas" />
              <Movie image="img/os-corajosos.webp" title="Os Corajosos" />
              <Movie image="img/eradogelo.webp" title="A Era do Gelo" />
            </div>
          </div>
        </section>

        <div class="trending-movies">
          <h2>Filmes para Família</h2>
          <button className="chevron-btn">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <section>
          <div id="secao" class="flex-center">
            <button className="backward-btn">
              <span className="material-symbols-outlined">
                chevron_backward
              </span>
            </button>

            <button className="forward-btn">
              <span className="material-symbols-outlined">chevron_forward</span>
            </button>

            <div id="movies3" className="flex-center movies">
              <Movie image="img/as-branquelas.jpeg" title="As Branquelas" />
              <Movie image="img/os-corajosos.webp" title="Os Corajosos" />
              <Movie image="img/eradogelo.webp" title="A Era do Gelo" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
