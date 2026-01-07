import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import AppRoutes from './routes'

function App() {
  const [input, setInput] = useState(' ')
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    if (!input) return

    navigate(`/search?q=${input}`)
    setInput(' ')
  }

  return (
    <>
      <header className="headercontainer">
        <nav className="navbar container">
          <h1>Filmes Online</h1>
          <ul>
            <li>Filmes</li>
            <li>Lançamentos</li>
            <li>Favoritos</li>
          </ul>

          <form className="search-form" onSubmit={handleSearch}>
            <button className="search-btn" type="submit">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              className="close-btn"
              type="button"
              onClick={() => setInput(' ')}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <input
              className="search-input"
              type="text"
              onChange={e => setInput(e.target.value)}
              placeholder="Que filme você quer assistir?"
            />
          </form>
        </nav>
      </header>

      <AppRoutes />
    </>
  )
}

export default App
