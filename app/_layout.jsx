import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

export default function Layout () {
  return (
    <View className='flex flex-grow items-center justify-center bg-slate-50'>
      <StatusBar />
      <Text>Hello World!</Text>
    </View>
  )
}
