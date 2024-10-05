import { createContext, useState } from 'react'
import LocalStorage from '@service/LocalStorageService'

export const AppContext = createContext()

export default function AuthProvider ({ children }) {
  const [lang, setLang] = useState('en')

  const configLang = (value) => {
    if (value === '') return
    setLang(value)

    const localStorage = new LocalStorage()
    localStorage.setItem('selectedLang', value)
  }

  return (
    <AppContext.Provider value={{ lang, configLang }}>
      {children}
    </AppContext.Provider>
  )
}
