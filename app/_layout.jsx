import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AuthProvider from '@context/AuthContext'

export default function Layout () {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}
        />
      </SafeAreaProvider>
    </AuthProvider>
  )
}
