import { User } from "@/types"
import axios from "axios"

export const getUserById = async (userId: string): Promise<User> => {
  const response = await axios.get(`users/${userId}`)
  return response.data
}
