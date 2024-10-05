import APIService from '@service/APIService'
import LocalStorage from '@service/LocalStorageService'
import AuthService from '@service/AuthService'

const register = async (username, password, email, phone) => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL

  const api = new APIService(API_URL)
  const localStorage = new LocalStorage()
  const auth = new AuthService(api, localStorage)
  const response = await auth.register(username, password, email, phone)

  return response.success
}

export default register
