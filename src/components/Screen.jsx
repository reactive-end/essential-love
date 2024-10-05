import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen ({ children, ...props }) {
  return (
    <SafeAreaView className='flex-grow' {...props}>
      {children}
    </SafeAreaView>
  )
}
