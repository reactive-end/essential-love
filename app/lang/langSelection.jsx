import { useContext } from 'react'
import { Text, View, ImageBackground, Pressable } from 'react-native'
import { AppContext } from '@context/AppContext'
import { router } from 'expo-router'

// Images
import Background from '@assets/background/3.jpg'

// Utils - hooks
import i18n from '@utils/i18n'
import useAuthed from '@hooks/useAuthed'

// Components
import Screen from '@components/Screen'

export default function Home () {
  const { configLang } = useContext(AppContext)
  useAuthed()

  const handlePress = (value) => {
    configLang(value)
    router.navigate('/characters/characterSelection')
  }

  return (
    <Screen>
      <ImageBackground className='flex flex-grow justify-center p-6' source={Background} resizeMode='cover'>
        <View className='gap-2 p-4 bg-slate-100 rounded-lg'>
          <Text className='text-center text-2xl text-slate-900'>{i18n('Lang Selection')}</Text>
          <View className='gap-y-2'>
            <Pressable onPress={() => { handlePress('es') }} className='bg-purple-500 text-white rounded-lg p-3'>
              <Text className='text-slate-100 uppercase tracking-widest text-center'>
                {i18n('Spanish')}
              </Text>
            </Pressable>
            <Pressable onPress={() => { handlePress('en') }} className='bg-purple-500 text-white rounded-lg p-3'>
              <Text className='text-slate-100 uppercase tracking-widest text-center'>
                {i18n('English')}
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  )
}
