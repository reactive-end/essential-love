import AsyncStorage from '@react-native-async-storage/async-storage'

class LocalStorage {
  constructor () {
    if (!LocalStorage.instance) {
      LocalStorage.instance = this
    }
    return LocalStorage.instance
  }

  async setItem (key, value) {
    try {
      const serializedValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error('Error al guardar en AsyncStorage', error)
    }
  }

  async getItem (key) {
    try {
      const serializedValue = await AsyncStorage.getItem(key)
      return serializedValue ? JSON.parse(serializedValue) : null
    } catch (error) {
      console.error('Error al obtener de AsyncStorage', error)
      return null
    }
  }

  async removeItem (key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error('Error al eliminar de AsyncStorage', error)
    }
  }

  async clear () {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error('Error al limpiar AsyncStorage', error)
    }
  }
}

export default LocalStorage
