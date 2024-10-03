import { useContext, useEffect } from 'react'
import { Text, View, ImageBackground, Pressable } from 'react-native'
import { AuthContext } from '@context/AuthContext'
import { router } from 'expo-router'

// Images
import Background from '@assets/background/3.jpg'

// Utils
import i18n from '@utils/i18n'

export default function Home () {
  const { authed } = useContext(AuthContext)
  useEffect(() => {
    if (!authed) router.navigate('/')
  }, [])

  return (
    <ImageBackground className='flex flex-grow justify-center p-6' source={Background} resizeMode='cover'>
      <View className='gap-2 p-4 bg-slate-100 rounded-lg'>
        <Text className='text-center text-2xl text-slate-900'>{i18n('Lang Selection')}</Text>
        <View className='gap-y-2'>
          <Pressable className='bg-purple-500 text-white rounded-lg p-3'>
            <Text className='text-slate-100 uppercase tracking-widest text-center'>
              {i18n('Spanish')}
            </Text>
          </Pressable>
          <Pressable className='bg-purple-500 text-white rounded-lg p-3'>
            <Text className='text-slate-100 uppercase tracking-widest text-center'>
              {i18n('English')}
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}
