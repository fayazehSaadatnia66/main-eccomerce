import { BaseModel, Role } from "@/types"

export interface User extends BaseModel {
  id: number
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  isTwoFactorEnable: boolean
  verifiedEmail: Date
  //   connections: UserConnection[]
  needReset: boolean
  isEnable: boolean
  roles: Role[]
  //   addresses: Address[]
  //   wishlist: Product[]
  hashedRt: string
  googleAvatar: string
  //   avatar: FileEntry
  //   orders: Order[]
  fullName: string
}
