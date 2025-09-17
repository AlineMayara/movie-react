import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Função para abortar a requisição se o componente for desmontado
    const abortController = new AbortController()

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error('A resposta da rede não foi bem-sucedida.')
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Erro ao buscar dados:', err)
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Função de limpeza: aborta a requisição se o componente for "desmontado"
    return () => abortController.abort()
  }, [url]) // Executa novamente sempre que a URL mudar

  return { data, loading, error }
}
