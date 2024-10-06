import { useContext, useEffect } from 'react'
import { Text, View, ImageBackground, Pressable, Image } from 'react-native'
import { router } from 'expo-router'

// Context
import { AppContext } from '@context/Context'

// Images
import Background from '@assets/background/3.jpg'
import Spain from '@assets/icons/spain.png'
import USA from '@assets/icons/usa.png'

// Utils
import i18n from '@utils/i18n'

// Hooks
import useAuthed from '@hooks/useAuthed'

// Components
import Screen from '@components/Screen'

export default function Home () {
  const { configLang, selectedLang } = useContext(AppContext)
  useAuthed()

  useEffect(() => {
    if (selectedLang) {
      router.navigate('/characters/characterSelection')
    }
  }, [])

  const handlePress = (value) => {
    configLang(value)
    router.navigate('/characters/characterSelection')
  }

  return (
    <Screen>
      <ImageBackground className='flex flex-grow justify-center p-6' source={Background} resizeMode='cover'>
        <View className='gap-y-2 p-4 bg-slate-100 rounded-lg'>
          <Text className='text-center text-3xl text-slate-900'>{i18n('Lang Selection')}</Text>
          <View className='gap-x-4 flex-row justify-center items-center'>
            <Pressable onPress={() => { handlePress('es') }} className='bg-slate-200 items-center flex-grow rounded-lg p-3'>
              <Image source={Spain} />
              <Text className='text-slate-900 uppercase tracking-widest text-center'>
                {i18n('Spanish')}
              </Text>
            </Pressable>
            <Pressable onPress={() => { handlePress('en') }} className='bg-slate-200 items-center flex-grow rounded-lg p-3'>
              <Image source={USA} />
              <Text className='text-slate-900 uppercase tracking-widest text-center'>
                {i18n('English')}
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  )
}
