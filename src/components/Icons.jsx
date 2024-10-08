import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export const BackArrow = ({ size = 24, color = '#000', ...props }) => {
  return (
    <MaterialIcons name='arrow-back' size={size} color={color} {...props} />
  )
}
