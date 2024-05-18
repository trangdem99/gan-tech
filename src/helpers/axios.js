import axios from "axios"

// content type
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.baseURL = process.env.PUBLIC_URL

axios.interceptors.request.use(
  async function (config) {
    return config
  },
  async function (error) {
    return Promise.reject(error)
  }
)

// intercepting to capture errors
axios.interceptors.response.use(
  async function (response) {
    return response.data ?? response
  },
  async function (error) {
    throw {
      "msg": error.response?.data?.msg ?? "Something went wrong. Please try again or contact admin/moderator.",
      "is_success": error.response?.data?.is_success ?? false
    }
  }
)

class Api {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params)
  // }
  get(url, params) {
    let response

    let paramKeys = []

    if (params) {
      Object.keys(params).forEach((key) => {
        if (typeof params[key] === "object") {
          // Handle nested objects
          Object.keys(params[key]).forEach(subKey => {
            paramKeys.push(`${key}[${subKey}]=${params[key][subKey]}`)
          })
        } else {
          paramKeys.push(`${key}=${params[key]}`)
        }
      })
  
      const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : ""
      response = axios.get(`${url}?${queryString}`, params)
    } else {
      response = axios.get(`${url}`, params)
    }

    return response
  }
  /**
   * post given data to url
   */
  post(url, data) {
    return axios.post(url, data)
  }
  /**
   * Updates data
   */
  patch(url, data) {
    return axios.patch(url, data)
  }

  put(url, data) {
    return axios.put(url, data)
  }
  /**
   * Delete
   */
  delete(url, config) {
    return axios.delete(url, {
      ...config 
    })
  }
}

export {
  Api,
}