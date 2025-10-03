import './index.css'
// 1. Importe o seu componente de rotas
import AppRoutes from './routes'

function App() {
  return (
    <>
      <header className="headercontainer">
        {/* O header é o layout principal e aparecerá em todas as páginas */}
        <nav className="navbar container">
          <h1>Filmes Online</h1>
          <ul>
            <li>Filmes</li>
            <li>Lançamentos</li>
            <li>Favoritos</li>
          </ul>

          <form className="search-form">
            <button className="search-btn" type="button">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="close-btn">
              <span className="material-symbols-outlined">close</span>
            </button>
            <input
              className="search-input"
              type="text"
              placeholder="Que filme você quer assistir?"
            />
          </form>
        </nav>
      </header>

      {/* 2. Renderize o componente que contém as rotas */}
      {/* Ele decidirá se mostra a HomePage ou a MovieDetails */}
      <AppRoutes />

      {/* Você pode adicionar um rodapé aqui se ele for comum a todas as páginas */}
    </>
  )
}

export default App
