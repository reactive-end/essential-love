import { ImageBackground, Pressable, Text, TextInput, View } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'

// Images
import Background from '@assets/background/3.jpg'

// Utils
import i18n from '@utils/i18n'

// Hooks
import register from '@utils/register'

export default function Index () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const handleReg = async () => {
    const response = await register(name, password, email, phone)

    if (response) {
      router.navigate('/')
    }
  }

  return (
    <ImageBackground className='flex flex-grow justify-center p-6' source={Background} resizeMode='cover'>
      <View className='flex gap-2 p-4 bg-slate-100 rounded-lg'>
        <Text className='text-center text-4xl text-slate-900'>
          {i18n('Register')}
        </Text>
        <Text>
          {i18n('Name')}
        </Text>
        <TextInput onChangeText={(text) => setName(text)} value={name} className='bg-slate-200 p-2 rounded-md' placeholder='example johnson' />
        <Text>
          {i18n('Email')}
        </Text>
        <TextInput onChangeText={(text) => setEmail(text)} value={email} inputMode='email' className='bg-slate-200 p-2 rounded-md' placeholder='example@gmail.com' />
        <Text>
          {i18n('Password')}
        </Text>
        <TextInput onChangeText={(text) => setPassword(text)} value={password} secureTextEntry className='bg-slate-200 p-2 rounded-md' placeholder='examplepass****' />
        <Text>
          {i18n('Phone')}
        </Text>
        <TextInput onChangeText={(text) => setPhone(text)} value={phone} inputMode='tel' className='bg-slate-200 p-2 rounded-md' placeholder='+1--------' />
        <Pressable onPress={handleReg} className='bg-purple-500 text-white rounded-lg p-3'>
          <Text className='text-slate-100 uppercase tracking-widest text-center'>
            {i18n('Register')}
          </Text>
        </Pressable>
        <View className='gap-y-2'>
          <Link href='/'>
            <Text className='text-purple-400'>
              Already have a Account
            </Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  )
}
