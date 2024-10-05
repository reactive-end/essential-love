import { Image, View, Text, Pressable } from 'react-native'

// Utils
import i18n from '@utils/i18n'

export default function CharacterCard ({ name, image, description }) {
  return (
    <View className='w-screen items-center p-4'>
      <View className='p-3 bg-slate-200 rounded-lg'>
        <Image className='h-96 w-max rounded-lg m-4' source={{ uri: `data:image/png;base64,${image}` }} />
        <View className='px-7 py-4 gap-2'>
          <Text className='text-2xl text-center text-slate-900'>{name}</Text>
          <Text className='text-slate-500 text-center'>{description}</Text>
          <Pressable className='bg-purple-500 text-white rounded-lg p-3'>
            <Text className='text-slate-100 uppercase tracking-widest text-center'>
              {i18n('Choose')}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
