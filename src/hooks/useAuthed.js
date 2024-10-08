import { useEffect, useContext } from 'react'
import { router } from 'expo-router'
import { AuthContext } from '@context/Context'

export default function useAuthed () {
  const { authed } = useContext(AuthContext)

  useEffect(() => {
    if (!authed) router.navigate('/')
  }, [])

  return {
    authed
  }
}
