import { Text, ScrollView, View } from 'react-native'
import useAuthed from '@hooks/useAuthed'
import useCharacters from '@hooks/useCharacters'

// Components
import Screen from '@components/Screen'
import Carrousel from '@components/Carrousel'

// Utils
import i18n from '@utils/i18n'

export default function CharacterSelection () {
  useAuthed()
  const { characters } = useCharacters()

  return (
    <Screen>
      <ScrollView>
        <View className='flex-grow justify-center'>
          <Text className='text-slate-900 text-center text-3xl my-4'>
            {i18n('Character Selection')}
          </Text>
          <Carrousel data={characters} />
        </View>
      </ScrollView>
    </Screen>
  )
}
