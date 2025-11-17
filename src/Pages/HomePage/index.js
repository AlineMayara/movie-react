import { useState } from 'react'
import ApiMovie from '../../Components/ApiMovie'
import CategoryFilter from '../../Components/CategoryFilter'
import './HomePage.css'

const HomePage = () => {
  const apiKey = '1865f43a0549ca50d341dd9ab8b29f49'

  // 1. ESTADO: Guarda o objeto do gênero que está selecionado.
  // Começa com o primeiro item da lista de gêneros.
  const [selectedGenre, setSelectedGenre] = useState({
    id: 'now_playing',
    name: 'Lançamentos'
  })

  // 2. FUNÇÃO: É chamada quando um botão de gênero é clicado.
  const handleGenreSelect = genre => {
    setSelectedGenre(genre) // Atualiza o estado com o novo gênero.
  }

  // 3. LÓGICA: Decide qual URL da API usar com base no gênero selecionado.
  let apiUrl = ''
  if (selectedGenre.id === 'now_playing' || selectedGenre.id === 'popular') {
    // Se for 'Lançamentos' ou 'Em Alta', a URL é diferente.
    apiUrl = `https://api.themoviedb.org/3/movie/${selectedGenre.id}?api_key=${apiKey}&language=pt-BR`
  } else {
    // Para os outros gêneros, a URL usa 'discover/movie'.
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${selectedGenre.id}`
  }

  return (
    <main className="container">
      <div className="banner__top"></div>

      {/* 4. COMPONENTE DE FILTRO: Renderiza os botões. */}
      <CategoryFilter
        onGenreSelect={handleGenreSelect}
        selectedGenre={selectedGenre.id}
      />

      {/* 5. COMPONENTE DE FILMES: Mostra a lista de filmes. */}
      <ApiMovie
        key={selectedGenre.id} // A 'key' força a recarga do componente
        title={selectedGenre.name}
        apiUrl={apiUrl}
      />
    </main>
  )
}

export default HomePage
