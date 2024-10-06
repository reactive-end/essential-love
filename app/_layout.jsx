import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import AuthProvider from '@context/AuthContext'
import AppProvider from '@context/AppContext'

export default function Layout () {
  return (
    <AppProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <StatusBar style='auto' />
          <Stack screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
          }}
          />
        </SafeAreaProvider>
      </AuthProvider>
    </AppProvider>
  )
}
