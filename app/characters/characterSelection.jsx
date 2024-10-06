import { Text, ScrollView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useContext } from 'react'
import { router } from 'expo-router'

// Hooks
import useAuthed from '@hooks/useAuthed'
import useCharacters from '@hooks/useCharacters'

// Components
import Screen from '@components/Screen'
import Carrousel from '@components/Carrousel'
import LoadingModal from '@components/LoadingModal'

// Utils
import i18n from '@utils/i18n'

// Context
import { AppContext } from '@context/Context'

export default function CharacterSelection () {
  useAuthed()
  const { characters, isLoading } = useCharacters()
  const { selectedCharacter, configCharacter } = useContext(AppContext)

  useEffect(() => {
    if (selectedCharacter) {
      router.navigate('/home/')
    }
  }, [])

  const handleSelect = async (value) => {
    configCharacter(value)
    router.navigate('/home/')
  }

  return (
    <Screen>
      <LinearGradient colors={['transparent', '#a855f7']} className='flex-grow'>
        <ScrollView className='flex-grow'>
          <View className='flex-grow justify-center'>
            <Text className='text-slate-900 text-center text-3xl py-4'>
              {i18n('Character Selection')}
            </Text>
            <View className='flex-grow justify-center items-center'>
              {
                isLoading
                  ? <LoadingModal />
                  : <Carrousel data={characters} cardHandler={handleSelect} />
              }
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </Screen>
  )
}
