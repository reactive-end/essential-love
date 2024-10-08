import { ImageBackground, Pressable, Text, TextInput, View, Alert } from 'react-native'
import { Link, Stack, router } from 'expo-router'
import { useState } from 'react'

// Images
import Background from '@assets/background/3.jpg'

// Utils
import i18n from '@utils/i18n'

// Hooks
import register from '@utils/register'

// Components
import Screen from '@components/Screen'
import LoadingModal from '@components/LoadingModal'

export default function Index () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleReg = async () => {
    setShowModal(true)
    const response = await register(name, password, email, phone)
    setShowModal(false)

    if (response) {
      router.navigate('/')
    } else {
      Alert.alert('Error!', i18n('An error occurred while trying to sign up, please try again later.'),
        [
          {
            text: i18n('Close'),
            style: 'cancel'
          }
        ])
    }
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
        <View className='flex gap-y-2 p-4 px-6 bg-black rounded-3xl'>
          <Text className='text-center text-4xl text-violet-400'>
            {i18n('Register')}
          </Text>
          <Text className='text-white'>
            {i18n('Name')}
          </Text>
          <TextInput onChangeText={(text) => setName(text)} value={name} className='bg-gray-100 p-2 rounded-md' placeholder='example johnson' />
          <Text className='text-white'>
            {i18n('Email')}
          </Text>
          <TextInput onChangeText={(text) => setEmail(text)} value={email} inputMode='email' className='bg-gray-100 p-2 rounded-md' placeholder='example@gmail.com' />
          <Text className='text-white'>
            {i18n('Password')}
          </Text>
          <TextInput onChangeText={(text) => setPassword(text)} value={password} secureTextEntry className='bg-gray-100 p-2 rounded-md' placeholder='examplepass****' />
          <Text className='text-white'>
            {i18n('Phone')}
          </Text>
          <TextInput onChangeText={(text) => setPhone(text)} value={phone} inputMode='tel' className='bg-gray-100 p-2 rounded-md' placeholder='+1--------' />
          <Pressable onPress={handleReg} className='bg-violet-500 text-white rounded-lg p-3'>
            <Text className='text-slate-100 uppercase tracking-widest text-center'>
              {i18n('Register')}
            </Text>
          </Pressable>
          <View className='gap-y-2'>
            <Link href='/'>
              <Text className='text-violet-400'>
                Already have a Account
              </Text>
            </Link>
          </View>
        </View>
      </ImageBackground>

      <LoadingModal showModal={showModal} />
    </Screen>
  )
}
