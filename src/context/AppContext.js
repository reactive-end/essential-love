import { createContext, useEffect, useState } from 'react'
import LocalStorage from '@service/LocalStorageService'

export const AppContext = createContext()
const localStorage = new LocalStorage()

export default function AuthProvider ({ children }) {
  const [lang, setLang] = useState('en')
  const [character, setCharacter] = useState(null)
  const [characters, setCharacters] = useState([])
  const [selectedLang, setSelectedLang] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const dataLang = await localStorage.getItem('lang')
      if (dataLang !== null) {
        setLang(dataLang)
      }

      const dataCharacter = await localStorage.getItem('character')
      if (dataCharacter !== null) {
        setCharacter(dataCharacter)
      }

      const dataSelectedLang = await localStorage.getItem('selectedLang')
      if (dataSelectedLang !== null) {
        setSelectedLang(dataSelectedLang)
      }

      const dataSelectedCharacter = await localStorage.getItem('selectedCharacter')
      if (dataSelectedCharacter !== null) {
        setSelectedCharacter(dataSelectedCharacter)
      }

      const dataCharacters = await localStorage.getItem('characters')
      if (dataCharacters !== null) {
        setCharacters(dataCharacters)
      }
    }

    fetchData()
  }, [])

  const configLang = async (value) => {
    if (value === '') return
    setLang(value)
    setSelectedLang(true)

    await localStorage.setItem('lang', value)
    await localStorage.setItem('selectedLang', true)
  }

  const configCharacter = async (value) => {
    if (value === '') return
    setCharacter(value)
    setSelectedCharacter(true)

    await localStorage.setItem('character', value)
    await localStorage.setItem('selectedCharacter', true)
  }

  const configCharacters = async (value) => {
    if (value === null) return
    setCharacters(value)

    await localStorage.setItem('characters', value)
  }

  return (
    <AppContext.Provider value={{ lang, character, characters, configLang, configCharacter, configCharacters, selectedLang, selectedCharacter }}>
      {children}
    </AppContext.Provider>
  )
}
