import { useContext, useEffect, useState } from 'react'
import { Image, Text, View, ImageBackground } from 'react-native'
import { Stack } from 'expo-router'

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

export default function Home () {
  const [image, setImage] = useState('')
  const { character, characters } = useContext(AppContext)

  useEffect(() => {
    if (characters.length > 0) {
      const selected = characters.filter(item => item.name === `${character}`)[0]

      setImage(selected.images.profile)
    }
  }, [])

  return (
    <Screen>
      <Stack.Screen options={{
        statusBarColor: '#000',
        statusBarStyle: 'light'
      }}
      />
      <View className='flex-grow'>
        <View className='bg-gray-950 border-b-2 border-slate-400 p-6 flex-row'>
          <Image className='w-24 h-24 rounded-3xl' source={{ uri: `data:image/png;base64,${image}` }} />
          <View className='p-4 justify-center'>
            <Text className='text-slate-300 text-2xl'>{character}</Text>
          </View>
        </View>
        <ImageBackground source={Background} className='p-4 flex-grow gap-y-3'>
          <View className='flex-row gap-x-2 bg-black p-4 rounded-2xl items-center'>
            <Image className='w-1/4 h-auto' source={Chat} />
            <View className='px-4'>
              <Text className='text-2xl text-slate-300'>{i18n('Chat')}</Text>
              <Text className='w-3/4 text-slate-400'>{i18n('Start chating with your beatiful couple')}</Text>
            </View>
          </View>
          <View className='flex-row gap-x-2 bg-black p-4 rounded-2xl items-center'>
            <Image className='w-1/4 h-auto' source={Dates} />
            <View className='px-4'>
              <Text className='text-2xl text-slate-300'>{i18n('Dates')}</Text>
              <Text className='w-3/4 text-slate-400'>{i18n('Immerse yourself in incredible dates')}</Text>
            </View>
          </View>
          <View className='flex-row gap-x-2 bg-black p-4 rounded-2xl items-center'>
            <Image className='w-1/4 h-auto' source={Store} />
            <View className='px-4'>
              <Text className='text-2xl text-slate-300'>{i18n('Store')}</Text>
              <Text className='w-3/4 text-slate-400'>{i18n('The best gifts you could find for your couple')}</Text>
            </View>
          </View>
          <View className='flex-row gap-x-2 bg-black p-4 rounded-2xl items-center'>
            <Image className='w-1/4 h-auto' source={Games} />
            <View className='px-4'>
              <Text className='text-2xl text-slate-300'>{i18n('Games')}</Text>
              <Text className='w-3/4 text-slate-400'>{i18n('Bored? have fun and spend time in our mini games')}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  )
}
