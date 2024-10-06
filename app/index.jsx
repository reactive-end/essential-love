import { ImageBackground, Pressable, Text, TextInput, View, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useContext, useState } from 'react'

// Context
import { AuthContext, AppContext } from '@context/Context'

// Images
import Background from '@assets/background/3.jpg'

// Utils
import i18n from '@utils/i18n'
import login from '@utils/login'

// Components
import Screen from '@components/Screen'
import LoadingModal from '@components/LoadingModal'

export default function Index () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const { authorize } = useContext(AuthContext)
  const { selectedLang, selectedCharacter } = useContext(AppContext)

  async function handleLogin () {
    setShowModal(true)
    const authorized = await login(email, password)
    setShowModal(false)

    if (authorized) {
      authorize()
      if (selectedLang) {
        if (selectedCharacter) {
          router.navigate('/home/')
        } else {
          router.navigate('/characters/characterSelection')
        }
      } else {
        router.navigate('/lang/langSelection')
      }
    } else {
      Alert.alert('Error!', i18n('An error occurred while trying to log in, please verify your credentials or try again later.'),
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
      <ImageBackground className='flex flex-grow justify-center p-6' source={Background} resizeMode='cover'>
        <View className='flex gap-2 p-4 bg-slate-100 rounded-lg'>
          <Text className='text-center text-4xl text-slate-900'>
            {i18n('Login')}
          </Text>
          <Text>
            {i18n('Email')}
          </Text>
          <TextInput inputMode='email' value={email} onChangeText={(text) => setEmail(text)} className='bg-slate-200 p-2 rounded-md' placeholder='example@gmail.com' />
          <Text>
            {i18n('Password')}
          </Text>
          <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry className='bg-slate-200 p-2 rounded-md' placeholder='examplepass****' />
          <Pressable onPress={handleLogin} className='bg-purple-500 text-white rounded-lg p-3'>
            <Text className='text-slate-100 uppercase tracking-widest text-center'>
              {i18n('Login')}
            </Text>
          </Pressable>
          <View className='flex-row gap-2'>
            <Text>
              {i18n('Forgot the Password?')}
            </Text>
            <Link href='/register'>
              <Text className='text-purple-400'>
                {i18n('Create a Account')}
              </Text>
            </Link>
          </View>
        </View>
      </ImageBackground>

      <LoadingModal showModal={showModal} />
    </Screen>
  )
}
