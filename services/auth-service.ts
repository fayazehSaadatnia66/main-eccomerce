import { appUrl } from "@/lib/utils"
import axios from "axios"

export const generateTwoFactorToken = async (email: string) => {
  await axios.post(`auth/two-factor/generate-token/${email}`)
}
export const generateTwoFactorTokenAndSendEmail = async (email: string) => {
  await axios.post(`auth/two-factor/generate-token-and-send/${email}`)
}
export const existingUser = async (userId: string) => {
  await axios.get(`users/${userId}`)
}
export const checkTwoFactorCode = async (email: string, code: string) => {
  const response = await axios.get(
    `auth/two-factor/token-by-email/${email}/${code}`
  )
  return response.data
}
