import { ScrollView, ImageBackground } from 'react-native'
import { useEffect, useContext, useState } from 'react'
import { Stack, router } from 'expo-router'

// Hooks
import useAuthed from '@hooks/useAuthed'
import useCharacters from '@hooks/useCharacters'

// Components
import Screen from '@components/Screen'
import Carrousel from '@components/Carrousel'
import LoadingModal from '@components/LoadingModal'

// Context
import { AppContext } from '@context/Context'

export default function CharacterSelection () {
  useAuthed()
  const [background, setBackground] = useState('')
  const { characters, isLoading } = useCharacters()
  const { selectedCharacter, configCharacter, configCharacters } = useContext(AppContext)

  useEffect(() => {
    if (selectedCharacter) {
      router.navigate('/home/')
    }
  }, [])

  useEffect(() => {
    if (background === '' && characters.length > 0) {
      setBackground(characters[0].images.select)

      configCharacters(characters)
    }
  }, [characters])

  const handleSelect = async (value) => {
    configCharacter(value)
    router.navigate('/home/')
  }

  const configBackground = (value) => {
    setBackground(value)
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          statusBarColor: '#000',
          statusBarStyle: 'light'
        }}
      />
      <ImageBackground source={{ uri: `data:image/png;base64,${background}` }} className='flex-grow'>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          {
            isLoading
              ? <LoadingModal />
              : <Carrousel data={characters} cardHandler={handleSelect} backgroundHandler={configBackground} />
          }
        </ScrollView>
      </ImageBackground>
    </Screen>
  )
}
