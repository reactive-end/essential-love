import ApiService from '@service/ApiService'
import LocalStorage from '@service/LocalStorage'
import AuthService from '@service/AuthService'

const login = async (username, password) => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL

  const api = new ApiService(API_URL)
  const localStorage = new LocalStorage()
  const auth = new AuthService(api, localStorage)
  const response = await auth.login(username, password)

  return response.success
}

export default login
