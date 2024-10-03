import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const [authed, setAuthed] = useState(false)

  const authorize = () => {
    setAuthed(true)
  }

  return (
    <AuthContext.Provider value={{ authed, authorize }}>
      {children}
    </AuthContext.Provider>
  )
}
