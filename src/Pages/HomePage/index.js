import ApiMovie from '../../Components/ApiMovie'

const HomePage = () => {
  const apiKey = '1865f43a0549ca50d341dd9ab8b29f49' // Mantenha sua chave da API segura

  // Objeto com as URLs para organizar
  const urls = {
    lancamentos: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&region=BR`,
    emAlta: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`,
    familia: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=10751`,
    acao: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=28`,
    comedia: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=35`
  }

  return (
    <main className="container">
      <div className="banner__top"></div>
      <div className="content__principal">
        <button>href="#"Ação</button>
        <button>href="#"Terror</button>
        <button>href="#"Ficção científica e fantasia</button>
        <button>href="#"Comédia</button>
        <button>href="#"Romance</button>
        <button>href="#"Aventura</button>
        <button>href="#"Suspense</button>
        <button>href="#"Familia</button>
        <button>href="#"Drama</button>
        <button>href="#"Documentário</button>
        <button>href="#"Faroeste</button>
        <button>href="#"Mistério</button>
        <button>href="#"Musical</button>
        <button>href="#"Show</button>
      </div>

      <div className="online-movies">
        <h1>Assistir filmes online</h1>
        <button className="arrow-btn" type="button">
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </button>
      </div>

      {/* O conteúdo da sua página inicial fica aqui */}
      <ApiMovie title="Lançamentos" apiUrl={urls.lancamentos} />
      <ApiMovie title="Filmes em Alta" apiUrl={urls.emAlta} />
      <ApiMovie title="Filmes para Família" apiUrl={urls.familia} />
      <ApiMovie title="Ação" apiUrl={urls.acao} />
      <ApiMovie title="Comédia" apiUrl={urls.comedia} />
    </main>
  )
}

export default HomePage
