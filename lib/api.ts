import axios from "axios"

export const generateTwoFactorToken = async (email: string) => {
  await axios.post(
    `http://localhost:8086/api/v1/auth/two-factor/generate-token/${email}`
  )
}
export const generateTwoFactorTokenAndSendEmail = async (email: string) => {
  await axios.post(
    `http://localhost:8086/api/v1/auth/two-factor/generate-token-and-send/${email}`
  )
}
export const existingUser = async (userId: string) => {
  await axios.get(`http://localhost:8086/api/v1/users/${userId}`)
}
export const checkTwoFactorCode = async (email: string, code: string) => {
  const response = await axios.get(
    `http://localhost:8086/api/v1/auth/two-factor/token-by-email/${email}/${code}`
  )
  return response.data
}
