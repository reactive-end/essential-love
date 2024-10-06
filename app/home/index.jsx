import { useContext } from 'react'
import { Image, Text, View, ImageBackground } from 'react-native'

// Components
import Screen from '@components/Screen'

// Utils
import i18n from '@utils/i18n'

// Images
import Background from '@assets/background/1.jpg'
import Chat from '@assets/icons/chat.png'
import Dates from '@assets/icons/dates.png'
import Store from '@assets/icons/store.png'
import Games from '@assets/icons/games.png'

// Context
import { AppContext } from '@context/Context'
import { Stack } from 'expo-router'

export default function Home () {
  const { character } = useContext(AppContext)

  return (
    <Screen>
      <Stack.Screen options={{
        statusBarColor: '#e2e8f0'
      }}
      />
      <View className='flex-grow'>
        <View className='bg-slate-200 border-b-2 border-slate-400 p-6'>
          <Text className='text-slate-600 text-2xl'>{character}</Text>
        </View>
        <ImageBackground source={Background} className='p-4 flex-grow gap-y-3'>
          <View className='flex-row bg-slate-200 border-2 border-slate-400 p-4 rounded-2xl items-center'>
            <Image source={Chat} />
            <Text className='text-2xl text-slate-600'>{i18n('Chat')}</Text>
          </View>
          <View className='flex-row bg-slate-200 border-2 border-slate-400 p-4 rounded-2xl items-center'>
            <Image source={Dates} />
            <Text className='text-2xl text-slate-600'>{i18n('Dates')}</Text>
          </View>
          <View className='flex-row bg-slate-200 border-2 border-slate-400 p-4 rounded-2xl items-center'>
            <Image source={Store} />
            <Text className='text-2xl text-slate-600'>{i18n('Store')}</Text>
          </View>
          <View className='flex-row bg-slate-200 border-2 border-slate-400 p-4 rounded-2xl items-center'>
            <Image source={Games} />
            <Text className='text-2xl text-slate-600'>{i18n('Games')}</Text>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  )
}
