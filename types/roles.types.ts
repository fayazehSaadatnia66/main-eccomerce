import { BaseModel } from "@/types"

export interface Role extends BaseModel {
  id: number
  name: string
  friendlyName: string
  permissions: Permission[]
}

export interface Permission extends BaseModel {
  id: number
  name: string
  friendlyName: string
}
