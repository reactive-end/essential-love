import { Modal, View, ActivityIndicator } from 'react-native'

export default function LoadingModal ({ showModal = true }) {
  return (
    <Modal
      animationType='fade'
      transparent
      visible={showModal}
    >
      <View className='bg-slate-900/30 absolute top-0 left-0 h-full w-full'>
        <ActivityIndicator className='absolute top-0 left-0 bottom-0 right-0 m-auto scale-150' color='#a855f7' size='large' />
      </View>
    </Modal>
  )
}
