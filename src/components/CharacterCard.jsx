import { useState } from 'react'
import { Image, View, Text, Dimensions, StyleSheet, Modal, Pressable } from 'react-native'

// Utils
import i18n from '@utils/i18n'

// Components
import { BackArrow } from '@components/Icons'

// Dimensions
const { width, height } = Dimensions.get('screen')

export default function CharacterCard ({ name, image, description, cardHandler }) {
  const [showModal, setShowModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  return (
    <View className='w-screen items-center justify-center p-4'>
      <View className='bg-black rounded-3xl gap-y-3 relative border-2 p-4' style={styles.container}>
        <Image className='w-max rounded-3xl' style={styles.image} source={{ uri: `data:image/png;base64,${image}` }} />
        <Text className='text-2xl text-center text-slate-50'>{name}</Text>
        <View className='items-center'>
          <Pressable onPress={() => { setShowModal(true) }} className='p-4 w-3/4 bg-purple-400 rounded-3xl'>
            <Text className='text-white text-center font-extrabold'>Select your future partner</Text>
          </Pressable>
        </View>
      </View>

      <Modal visible={showModal}>
        <View className='bg-black flex-grow'>
          <View className='flex-row gap-x-2 px-6 items-center'>
            <Pressable onPress={() => { setShowModal(false) }}>
              <Text className='text-white text-2xl'>
                <BackArrow color='#fff' />
              </Text>
            </Pressable>
            <Text className='text-white text-xl p-4'>{name}</Text>
          </View>
          <View className='flex-grow'>
            <Image className='w-screen flex-grow' source={{ uri: `data:image/png;base64,${image}` }} />
            <Text className='text-white p-4'>{description}</Text>
            <View className='items-center'>
              <Pressable onPress={() => { setShowConfirmModal(true) }} className='bg-purple-400 rounded-3xl w-3/4 p-4'>
                <Text className='text-white font-extrabold text-center'>{i18n('Choose')}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={showConfirmModal}>
        <View className='flex-grow bg-black/50 p-4 justify-center'>
          <View className='bg-white rounded-3xl p-4 gap-y-3'>
            <Text className='text-center'>{i18n(`Choose ${name}?`)}</Text>
            <View className='flex-row gap-x-2'>
              <Pressable onPress={() => { setShowConfirmModal(false) }} className='bg-red-600 rounded-3xl flex-grow p-4'>
                <Text className='text-white font-extrabold text-center'>{i18n('No')}</Text>
              </Pressable>
              <Pressable onPress={() => { cardHandler(name) }} className='bg-blue-500 rounded-3xl flex-grow p-4'>
                <Text className='text-white font-extrabold text-center'>{i18n('Yes')}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9
  },
  image: {
    height: height * 0.40
  }
})
