import axios from 'axios'

class APIService {
  constructor (baseURL) {
    this.api = axios.create({
      baseURL,
      timeout: 10000
    })

    this.api.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  setToken (token) {
    this.token = token
  }

  clearToken () {
    this.token = null
  }

  async get (endpoint, params = {}) {
    try {
      const response = await this.api.get(endpoint, { params })
      return { data: response.data, status: response.status }
    } catch (error) {
      return { error: error.message, status: error.response?.status }
    }
  }

  async post (endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data)
      return { data: response.data, status: response.status }
    } catch (error) {
      return { error: error.message, status: error.response?.status }
    }
  }

  async put (endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data)
      return { data: response.data, status: response.status }
    } catch (error) {
      return { error: error.message, status: error.response?.status }
    }
  }

  async delete (endpoint) {
    try {
      const response = await this.api.delete(endpoint)
      return { data: response.data, status: response.status }
    } catch (error) {
      return { error: error.message, status: error.response?.status }
    }
  }
}

export default APIService
