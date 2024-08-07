// utils/CustomError.ts

export interface RFC7807 {
  type: string
  title: string
  status: number
  detail: string
  instance?: string
}

export class CustomError extends Error implements RFC7807 {
  type: string
  title: string
  status: number
  detail: string
  instance?: string

  constructor({ type, title, status, detail, instance }: RFC7807) {
    super(detail)
    this.type = type
    this.title = title
    this.status = status
    this.detail = detail
    this.instance = instance
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name
    // Capture the stack trace to maintain the error's context
    Error.captureStackTrace(this, this.constructor)
  }
}
