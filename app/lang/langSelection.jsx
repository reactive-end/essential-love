import { useContext, useEffect } from 'react'
import { Text, View, ImageBackground, Pressable } from 'react-native'
import { router, Stack } from 'expo-router'

// Context
import { AppContext } from '@context/Context'

// Images
import Background from '@assets/background/3.jpg'

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
      <Stack.Screen
        options={{
          statusBarColor: '#000',
          statusBarStyle: 'light'
        }}
      />
      <ImageBackground className='flex flex-grow justify-center p-6' source={Background} resizeMode='cover'>
        <View className='bg-black/50 rounded-3xl overflow-hidden'>
          <Text className='text-center text-3xl text-slate-100 bg-violet-500 p-4'>{i18n('Lang Selection')}</Text>
          <View className='gap-y-4 justify-center items-center py-4'>
            <Pressable onPress={() => { handlePress('es') }} className='bg-black flex-grow rounded-3xl p-5 w-full border-2 border-violet-400'>
              <Text className='text-slate-100 uppercase tracking-widest text-center'>
                {i18n('Spanish')}
              </Text>
            </Pressable>
            <Pressable onPress={() => { handlePress('en') }} className='bg-black flex-grow rounded-3xl p-5 w-full border-2 border-violet-400'>
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
