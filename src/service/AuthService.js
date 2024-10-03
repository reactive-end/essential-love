import jwtDecode from 'jwt-decode'

class AuthService {
  constructor (apiService, localStorage) {
    this.apiService = apiService
    this.localStorage = localStorage
    this.tokenKey = 'authToken'
  }

  async register (name, password, email, phone) {
    try {
      const response = await this.apiService.post('/v1/users', { name, password, email, phone })
      if (response.data) {
        return { success: true }
      } else {
        return { success: false, message: 'Invalid registration response' }
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  async login (username, password) {
    try {
      const response = await this.apiService.post('/login', { email: username, password })
      if (response.data) {
        await this.setToken(response.data.message.Authorization)
        return { success: true, data: response.data }
      } else {
        return { success: false, message: 'Invalid login response' }
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  async logout () {
    await this.clearToken()
  }

  async setToken (token) {
    this.apiService.setToken(token)
    await this.localStorage.setItem(this.tokenKey, token)
  }

  async clearToken () {
    this.apiService.clearToken()
    await this.localStorage.removeItem(this.tokenKey)
  }

  async isAuthenticated () {
    const token = await this.localStorage.getItem(this.tokenKey)
    if (token && !this.isTokenExpired(token)) {
      await this.setToken(token)
      return true
    } else {
      await this.clearToken()
      return false
    }
  }

  isTokenExpired (token) {
    try {
      const decoded = jwtDecode(token)
      const currentTime = Date.now() / 1000
      return decoded.exp < currentTime
    } catch (error) {
      console.error('Error decoding token', error)
      return true
    }
  }
}

export default AuthService
