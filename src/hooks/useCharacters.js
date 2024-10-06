import { useEffect, useState } from 'react'
import APIService from '@service/APIService'

const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = process.env.EXPO_PUBLIC_API_URL

      const api = new APIService(API_URL)
      const response = await api.get('/v1/characters')

      setCharacters(response.data.message)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return {
    characters,
    isLoading
  }
}

export default useCharacters
