import { Image, View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// Utils
import i18n from '@utils/i18n'

// Dimensions
const { width, height } = Dimensions.get('screen')

export default function CharacterCard ({ name, image, description, cardHandler }) {
  return (
    <View className='w-screen items-center justify-center p-4'>
      <View className='bg-slate-200 rounded-3xl relative' style={styles.container}>
        <Image className='w-max rounded-3xl' style={styles.image} source={{ uri: `data:image/png;base64,${image}` }} />
        <LinearGradient colors={['transparent', '#000b']} className='absolute h-full top-0 right-0 left-0 rounded-3xl'>
          <View className='px-7 py-4 gap-2 flex-grow justify-end'>
            <Text className='text-2xl text-center text-slate-50'>{name}</Text>
            <Text className='text-slate-50 text-center'>{description}</Text>
            <Pressable onPress={() => { cardHandler(name) }} className='bg-purple-500 text-white rounded-lg p-3'>
              <Text className='text-slate-100 uppercase tracking-widest text-center'>
                {i18n('Choose')}
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9
  },
  image: {
    height: height * 0.75
  }
})
