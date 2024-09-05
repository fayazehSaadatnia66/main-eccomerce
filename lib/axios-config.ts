// utils/axiosConfig.js

import axios from "axios"
import { RFC7807 } from "./custom-error"
import { appUrl } from "./utils"
// type RFC7807Error = {
//   type: string
//   title: string
//   detail: string
//   status: number
//   instance: string
// }
const api = axios.create({
  baseURL: appUrl // Change this to your API's base URL
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let problemDetails: RFC7807
    if (error.response) {
      problemDetails = error.response.data
    } else if (error.request) {
      problemDetails = {
        type: "https://example.com/probs/network-error",
        title: "Network Error",
        status: 0,
        detail: "The request was made but no response was received",
        instance: error.config.url
      }
    } else {
      problemDetails = {
        type: "https://example.com/probs/unknown-error",
        title: "Unknown Error",
        status: 0,
        detail: error.message,
        instance: ""
      }
    }
    return Promise.reject(problemDetails)
  }
)

export default api
